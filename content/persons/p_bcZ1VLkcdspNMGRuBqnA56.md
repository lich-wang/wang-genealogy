---
schema: wang-person/v1
id: p_bcZ1VLkcdspNMGRuBqnA56
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 298724
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_l_VNg9oMJibkxMW-DmtTs_
        subject_person_id: p_bcZ1VLkcdspNMGRuBqnA56
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KMCwFAOboLGx0GMQoxZCub
          claim_id: c_l_VNg9oMJibkxMW-DmtTs_
          source_id: s_5ZQSHTqlClRUeMTJt9eg3b
          stance: supports
          locator: CBDB:298724
          quotation: null
          interpretation_note: CBDB 明确记录的王翰配偶
          source: &a1
            id: s_5ZQSHTqlClRUeMTJt9eg3b
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王翰妻)（CBDB 298724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298724&o=json
            external_identifier: CBDB:298724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1f9We89Vjuck-mZuRX95u2
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bcZ1VLkcdspNMGRuBqnA56
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWvq4qYW-Z-AP3ghr0yCc6
          claim_id: c_1f9We89Vjuck-mZuRX95u2
          source_id: s_5ZQSHTqlClRUeMTJt9eg3b
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王翰妻)（CBDB 298724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298724&o=json)
