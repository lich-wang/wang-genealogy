---
schema: wang-person/v1
id: p_Xc9qEvyFBtpCZ2gJfJpwiL
status: active
merged_into: null
display_name: 王謐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u2QFpqENiziYmnr7U2XAVh
        subject_person_id: p_Xc9qEvyFBtpCZ2gJfJpwiL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1y8wzmh6wwkstroP78uwXx
          claim_id: c_u2QFpqENiziYmnr7U2XAVh
          source_id: s_aLbpnvTTW9C4KJL7D1vASg
          stance: supports
          locator: CBDB:273029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273029）
          source: &a1
            id: s_aLbpnvTTW9C4KJL7D1vASg
            source_type: api_record
            title: 中国历代人物传记资料库：王謐（CBDB 273029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273029&o=json
            external_identifier: CBDB:273029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XLJ7Vo6bCCyernnmiVvFpN
        subject_person_id: p_Xc9qEvyFBtpCZ2gJfJpwiL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ou6c0GUB4lQBhmYxUCM3X3
          claim_id: c_XLJ7Vo6bCCyernnmiVvFpN
          source_id: s_aLbpnvTTW9C4KJL7D1vASg
          stance: supports
          locator: CBDB:273029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_lgzuMl0nYdaM6bOjI5chwI
        subject_person_id: p_Xc9qEvyFBtpCZ2gJfJpwiL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9aVKxPyVaDrWCGVGCNZPGp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsQlXVwwqIcmh-wwnbUmuQ
          claim_id: c_lgzuMl0nYdaM6bOjI5chwI
          source_id: s_j9uH43zhdBzNHC6ZK1tsqN
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j9uH43zhdBzNHC6ZK1tsqN
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 201476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201476&o=json
            external_identifier: CBDB:201476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9aVKxPyVaDrWCGVGCNZPGp
        status: active
        display_name: 王進賢
        merged_into_person_id: null
  other: []
---

# 王謐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謐 | accepted |
| bio.summary | 王謐，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9aVKxPyVaDrWCGVGCNZPGp | 王進賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進賢（CBDB 201476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201476&o=json)
- [中国历代人物传记资料库：王謐（CBDB 273029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273029&o=json)
