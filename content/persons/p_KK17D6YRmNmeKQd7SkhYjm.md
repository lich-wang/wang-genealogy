---
schema: wang-person/v1
id: p_KK17D6YRmNmeKQd7SkhYjm
status: active
merged_into: null
display_name: 王登科
cbdb_id: 415145
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zDKamR5HdeJiRhhkNis9sK
        subject_person_id: p_KK17D6YRmNmeKQd7SkhYjm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登科，清人物。曾任把總。（中国历代人物传记资料库 CBDB 415145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QsShOp6CLiuoTz7G3Q4VuL
          claim_id: c_zDKamR5HdeJiRhhkNis9sK
          source_id: s_Ch2Qvjv4n8cGRoEt6DC8BD
          stance: supports
          locator: CBDB:415145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ch2Qvjv4n8cGRoEt6DC8BD
            source_type: api_record
            title: 中国历代人物传记资料库：王登科（CBDB 415145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415145&o=json
            external_identifier: CBDB:415145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:52.674Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7tojqxE3LDZ7YHkHwKfjtt
        subject_person_id: p_KK17D6YRmNmeKQd7SkhYjm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pEyEerKnYqyG7ARJnMuAP7
          claim_id: c_7tojqxE3LDZ7YHkHwKfjtt
          source_id: s_Ch2Qvjv4n8cGRoEt6DC8BD
          stance: supports
          locator: CBDB:415145
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6101-6200）｜历史性依据：CBDB 朝代 = 清
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
  other: []
---

# 王登科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王登科，清人物。曾任把總。（中国历代人物传记资料库 CBDB 415145） | accepted |
| name.primary | 王登科 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登科（CBDB 415145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415145&o=json)
