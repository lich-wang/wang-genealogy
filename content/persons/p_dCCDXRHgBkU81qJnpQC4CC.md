---
schema: wang-person/v1
id: p_dCCDXRHgBkU81qJnpQC4CC
status: active
merged_into: null
display_name: 王義方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tasVnn167eXyc89ibtgxpp
        subject_person_id: p_dCCDXRHgBkU81qJnpQC4CC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iFT83U7pbHAGgdLKYJP1PU
          claim_id: c_tasVnn167eXyc89ibtgxpp
          source_id: s_fqjENvDuAH7FzXRoiDuD1W
          stance: supports
          locator: CBDB:690109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690109）
          source: &a1
            id: s_fqjENvDuAH7FzXRoiDuD1W
            source_type: api_record
            title: 中国历代人物传记资料库：王義方（CBDB 690109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690109&o=json
            external_identifier: CBDB:690109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FfQ96TQ8WcAL4LDR3p3wZz
        subject_person_id: p_dCCDXRHgBkU81qJnpQC4CC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義方，宋人物。籍贯臨城。（中国历代人物传记资料库 CBDB 690109）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d8QaOSAe6JDdkv6OhXaBBT
          claim_id: c_FfQ96TQ8WcAL4LDR3p3wZz
          source_id: s_fqjENvDuAH7FzXRoiDuD1W
          stance: supports
          locator: CBDB:690109
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LkouFS8-Fz0EX2RAFr4qnN
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dCCDXRHgBkU81qJnpQC4CC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pj8c_Xz0Pgv_9CHBfodT2D
          claim_id: c_LkouFS8-Fz0EX2RAFr4qnN
          source_id: s_-kfDKVO0f3Bd8Zf5NP6U6q
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22213）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_-kfDKVO0f3Bd8Zf5NP6U6q
            source_type: api_record
            title: 中国历代人物传记资料库：王義方（CBDB 690109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690109&o=json
            external_identifier: CBDB:690109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5HLAwt21hgN7UKGzKG2BNZ
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義方 | accepted |
| bio.summary | 王義方，宋人物。籍贯臨城。（中国历代人物传记资料库 CBDB 690109） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5HLAwt21hgN7UKGzKG2BNZ | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義方（CBDB 690109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690109&o=json)
