---
schema: wang-person/v1
id: p_8ZNRfFsK3rEkNpQdDz6act
status: active
merged_into: null
display_name: 王庭秀
cbdb_id: 19082
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m2HEH88HAZaSmBy7QaiRqz
        subject_person_id: p_8ZNRfFsK3rEkNpQdDz6act
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭秀，宋人物。中国历代人物传记资料库（CBDB）以人物编号 19082 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5xN50O76o28Od2KiA_Pt-u
          claim_id: c_m2HEH88HAZaSmBy7QaiRqz
          source_id: s_P9rcd9SYRqyM5Qp4JcJpmA
          stance: supports
          locator: CBDB:19082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P9rcd9SYRqyM5Qp4JcJpmA
            source_type: api_record
            title: 中国历代人物传记资料库：王庭秀（CBDB 19082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19082&o=json
            external_identifier: CBDB:19082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eZmX8gJidF47zqHmQFkL14
        subject_person_id: p_8ZNRfFsK3rEkNpQdDz6act
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NgHQgvvNTqHuj46KgvWdyz
          claim_id: c_eZmX8gJidF47zqHmQFkL14
          source_id: s_P9rcd9SYRqyM5Qp4JcJpmA
          stance: supports
          locator: CBDB:19082
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_P9rcd9SYRqyM5Qp4JcJpmA
            source_type: api_record
            title: 中国历代人物传记资料库：王庭秀（CBDB 19082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19082&o=json
            external_identifier: CBDB:19082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kaEAxL9lFu9oxoDPq3Wm04
        subject_person_id: p_8ZNRfFsK3rEkNpQdDz6act
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bo8MMr1AvoPCtWH71g8W6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SPk5mx1wXL8FAWGX1Nikwl
          claim_id: c_kaEAxL9lFu9oxoDPq3Wm04
          source_id: s_P9rcd9SYRqyM5Qp4JcJpmA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1267：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bo8MMr1AvoPCtWH71g8W6V
        status: active
        display_name: 王璧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭秀，宋人物。中国历代人物传记资料库（CBDB）以人物编号 19082 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王庭秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Bo8MMr1AvoPCtWH71g8W6V | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭秀（CBDB 19082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19082&o=json)
