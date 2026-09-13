---
schema: wang-person/v1
id: p_7Xn7iVNoRNJcpvXvqWQ2Vv
status: active
merged_into: null
display_name: 王士煥
cbdb_id: 28789
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b8JQKUVseFVMNQ7TZLc8an
        subject_person_id: p_7Xn7iVNoRNJcpvXvqWQ2Vv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士煥，元人物。籍贯須城。（中国历代人物传记资料库 CBDB 28789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QPJ6nHy_vH-HWLuzywe6ml
          claim_id: c_b8JQKUVseFVMNQ7TZLc8an
          source_id: s_m6MwaYu9kU1PjxDAnrwKnL
          stance: supports
          locator: CBDB:28789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m6MwaYu9kU1PjxDAnrwKnL
            source_type: api_record
            title: 中国历代人物传记资料库：王士煥（CBDB 28789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28789&o=json
            external_identifier: CBDB:28789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLCyR6RDEDLSdri5EWsBZ8
        subject_person_id: p_7Xn7iVNoRNJcpvXvqWQ2Vv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BMGvsfjU772p3tBE1P6Rj8
          claim_id: c_iLCyR6RDEDLSdri5EWsBZ8
          source_id: s_m6MwaYu9kU1PjxDAnrwKnL
          stance: supports
          locator: CBDB:28789
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
          source: *a1
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
        id: c_OmeScdVlczew4qwgX42538
        subject_person_id: p_7azhxqix4L7NzFdHMRSmU1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7Xn7iVNoRNJcpvXvqWQ2Vv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JMzGp9mF5ky299A0IcvpXj
          claim_id: c_OmeScdVlczew4qwgX42538
          source_id: s_UhRW6DGYct8Z54ZAGx2Fsm
          stance: supports
          locator: CBDB 双向互证（孫 王士煥 ⇄ 祖父 王公淵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UhRW6DGYct8Z54ZAGx2Fsm
            source_type: api_record
            title: 中国历代人物传记资料库：王公淵（CBDB 28786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28786&o=json
            external_identifier: CBDB:28786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7azhxqix4L7NzFdHMRSmU1
        status: active
        display_name: 王公淵
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王士煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士煥，元人物。籍贯須城。（中国历代人物传记资料库 CBDB 28789） | accepted |
| name.primary | 王士煥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_7azhxqix4L7NzFdHMRSmU1 | 王公淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公淵（CBDB 28786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28786&o=json)
- [中国历代人物传记资料库：王士煥（CBDB 28789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28789&o=json)
