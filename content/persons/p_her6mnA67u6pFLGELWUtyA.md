---
schema: wang-person/v1
id: p_her6mnA67u6pFLGELWUtyA
status: active
merged_into: null
display_name: 王㴶
cbdb_id: 526824
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p6jWS1qo3a3d7BzEN1FVTQ
        subject_person_id: p_her6mnA67u6pFLGELWUtyA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㴶，清人物。中国历代人物传记资料库（CBDB）以人物编号 526824 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_2dFQAupZvLxtu_S1Dxf2WV
          claim_id: c_p6jWS1qo3a3d7BzEN1FVTQ
          source_id: s_MajVPoeGFsbB2RUdAFkYHN
          stance: supports
          locator: CBDB:526824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_MajVPoeGFsbB2RUdAFkYHN
            source_type: api_record
            title: 中国历代人物传记资料库：王㴶（CBDB 526824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526824&o=json
            external_identifier: CBDB:526824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9yja3hH2R1s6o4RTQXyEk
        subject_person_id: p_her6mnA67u6pFLGELWUtyA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㴶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hSgKByNGS4U3mv2dNDNxPJ
          claim_id: c_J9yja3hH2R1s6o4RTQXyEk
          source_id: s_MajVPoeGFsbB2RUdAFkYHN
          stance: supports
          locator: CBDB:526824
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_MajVPoeGFsbB2RUdAFkYHN
            source_type: api_record
            title: 中国历代人物传记资料库：王㴶（CBDB 526824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526824&o=json
            external_identifier: CBDB:526824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_laYuAY4udYNa9yVvsYzkWb
        subject_person_id: p_kL63TcA3MHsEgx9BLatjnT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_her6mnA67u6pFLGELWUtyA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iZGyOk3qgbFIMEubfaZ66z
          claim_id: c_laYuAY4udYNa9yVvsYzkWb
          source_id: s_Uo6qEBKiSAACzCR5qpHH5g
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179051：孫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Uo6qEBKiSAACzCR5qpHH5g
            source_type: api_record
            title: 中国历代人物传记资料库：王峋（CBDB 702918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702918&o=json
            external_identifier: CBDB:702918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kL63TcA3MHsEgx9BLatjnT
        status: active
        display_name: 王峋
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王㴶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王㴶，清人物。中国历代人物传记资料库（CBDB）以人物编号 526824 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王㴶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_kL63TcA3MHsEgx9BLatjnT | 王峋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峋（CBDB 702918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702918&o=json)
- [中国历代人物传记资料库：王㴶（CBDB 526824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526824&o=json)
