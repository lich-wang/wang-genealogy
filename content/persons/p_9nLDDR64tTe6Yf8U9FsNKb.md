---
schema: wang-person/v1
id: p_9nLDDR64tTe6Yf8U9FsNKb
status: active
merged_into: null
display_name: 王紃
cbdb_id: 309074
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5kt6KH7TwHh57cZYBqHLH
        subject_person_id: p_9nLDDR64tTe6Yf8U9FsNKb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紃，明人物。中国历代人物传记资料库（CBDB）以人物编号 309074 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_V5pyMnAlDeB4txif3M7E3N
          claim_id: c_n5kt6KH7TwHh57cZYBqHLH
          source_id: s_8VN8MVjjbAYUXL3Kf7WMsE
          stance: supports
          locator: CBDB:309074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8VN8MVjjbAYUXL3Kf7WMsE
            source_type: api_record
            title: 中国历代人物传记资料库：王紃（CBDB 309074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309074&o=json
            external_identifier: CBDB:309074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fj3C5hiew8bGQ2FfAYnGNW
        subject_person_id: p_9nLDDR64tTe6Yf8U9FsNKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NdnytqW4V6g5AyjyvdrdPH
          claim_id: c_fj3C5hiew8bGQ2FfAYnGNW
          source_id: s_8VN8MVjjbAYUXL3Kf7WMsE
          stance: supports
          locator: CBDB:309074
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_8VN8MVjjbAYUXL3Kf7WMsE
            source_type: api_record
            title: 中国历代人物传记资料库：王紃（CBDB 309074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309074&o=json
            external_identifier: CBDB:309074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
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
  ancestors: []
  descendants:
    - claim:
        id: c_sd0YGXVMt4mnOT0uaRgXnI
        subject_person_id: p_9nLDDR64tTe6Yf8U9FsNKb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YVGIAJgWJXUWXEr7AEFy1
          claim_id: c_sd0YGXVMt4mnOT0uaRgXnI
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gQ1iyNseF56QiyBot1tdVq
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 203722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json
            external_identifier: CBDB:203722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m1KPPjDFuB77sgosg8dB61
        status: active
        display_name: 王有為
        merged_into_person_id: null
  other: []
---

# 王紃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紃，明人物。中国历代人物传记资料库（CBDB）以人物编号 309074 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王紃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紃（CBDB 309074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309074&o=json)
- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
