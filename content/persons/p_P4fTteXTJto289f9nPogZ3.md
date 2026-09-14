---
schema: wang-person/v1
id: p_P4fTteXTJto289f9nPogZ3
status: active
merged_into: null
display_name: 王朝明
cbdb_id: 282729
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mq8PyF74GKEtFrGbypbvXi
        subject_person_id: p_P4fTteXTJto289f9nPogZ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝明，明人物。正德十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 282729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1RXuDKQI5LFkJhDq_HreA4
          claim_id: c_Mq8PyF74GKEtFrGbypbvXi
          source_id: s_g31YdP4Ne8yRgoBXzJnfDG
          stance: supports
          locator: CBDB:282729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g31YdP4Ne8yRgoBXzJnfDG
            source_type: api_record
            title: 中国历代人物传记资料库：王朝明（CBDB 282729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282729&o=json
            external_identifier: CBDB:282729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5An97kCDLJ16Tjd73wfxMV
        subject_person_id: p_P4fTteXTJto289f9nPogZ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FN8ifvCg5DgqoEkKPWujnk
          claim_id: c_5An97kCDLJ16Tjd73wfxMV
          source_id: s_g31YdP4Ne8yRgoBXzJnfDG
          stance: supports
          locator: CBDB:282729
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ggmdOR083eDXPta9k50w2o
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P4fTteXTJto289f9nPogZ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_satLKMG6ia6J3VyjTTKOWD
          claim_id: c_ggmdOR083eDXPta9k50w2o
          source_id: s_NgaGws1td5m0D0jaxJPHrz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NgaGws1td5m0D0jaxJPHrz
            source_type: api_record
            title: 中国历代人物传记资料库：王朝明（CBDB 282729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282729&o=json
            external_identifier: CBDB:282729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ARBsKDMivmjbBTxJiQz7Aa
        status: active
        display_name: 王朝瑬
        merged_into_person_id: null
---

# 王朝明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝明，明人物。正德十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 282729） | accepted |
| name.primary | 王朝明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_ARBsKDMivmjbBTxJiQz7Aa | 王朝瑬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝明（CBDB 282729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282729&o=json)
