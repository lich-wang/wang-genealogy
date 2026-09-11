---
schema: wang-person/v1
id: p_ea1c741tbGsFRoxmHPKYXv
status: active
merged_into: null
display_name: 王彥璋
cbdb_id: 309075
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZjjh1C3SHXDxXKKyAHQL3
        subject_person_id: p_ea1c741tbGsFRoxmHPKYXv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥璋，明人物。中国历代人物传记资料库（CBDB）以人物编号 309075 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_FbiSeYpj_ngGJBLtAmjmSZ
          claim_id: c_KZjjh1C3SHXDxXKKyAHQL3
          source_id: s_GNyNCMaMWTdNZbmdVNe3tn
          stance: supports
          locator: CBDB:309075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_GNyNCMaMWTdNZbmdVNe3tn
            source_type: api_record
            title: 中国历代人物传记资料库：王彥璋（CBDB 309075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309075&o=json
            external_identifier: CBDB:309075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ayq353Hu4TF2DBYeqUb6YY
        subject_person_id: p_ea1c741tbGsFRoxmHPKYXv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qKN8cQfsefJq8e1pc9SPe9
          claim_id: c_Ayq353Hu4TF2DBYeqUb6YY
          source_id: s_GNyNCMaMWTdNZbmdVNe3tn
          stance: supports
          locator: CBDB:309075
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_GNyNCMaMWTdNZbmdVNe3tn
            source_type: api_record
            title: 中国历代人物传记资料库：王彥璋（CBDB 309075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309075&o=json
            external_identifier: CBDB:309075
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
        id: c_Btbn6Iw7UE6h4oox47zTnV
        subject_person_id: p_ea1c741tbGsFRoxmHPKYXv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NhffR5s9bgNJnQuqNBvXs8
          claim_id: c_Btbn6Iw7UE6h4oox47zTnV
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：祖父
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

# 王彥璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥璋，明人物。中国历代人物传记资料库（CBDB）以人物编号 309075 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王彥璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥璋（CBDB 309075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309075&o=json)
- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
