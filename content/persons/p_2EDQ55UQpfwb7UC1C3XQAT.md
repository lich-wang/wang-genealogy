---
schema: wang-person/v1
id: p_2EDQ55UQpfwb7UC1C3XQAT
status: active
merged_into: null
display_name: 王郁文
cbdb_id: 278853
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KhQ8hr2PXHPCReb4D17C4E
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁文，明人物。中国历代人物传记资料库（CBDB）以人物编号 278853 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Ys6LuIwYkgwIfRwmAl8wWz
          claim_id: c_KhQ8hr2PXHPCReb4D17C4E
          source_id: s_8gw8SjwfGGx8KQQvTPrF8f
          stance: supports
          locator: CBDB:278853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8gw8SjwfGGx8KQQvTPrF8f
            source_type: api_record
            title: 中国历代人物传记资料库：王郁文（CBDB 278853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278853&o=json
            external_identifier: CBDB:278853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h1Wa4YGm1HmAEiGX7Ax6oa
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hm5ZqPdGHACb3zpU5hWhur
          claim_id: c_h1Wa4YGm1HmAEiGX7Ax6oa
          source_id: s_8gw8SjwfGGx8KQQvTPrF8f
          stance: supports
          locator: CBDB:278853
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_8gw8SjwfGGx8KQQvTPrF8f
            source_type: api_record
            title: 中国历代人物传记资料库：王郁文（CBDB 278853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278853&o=json
            external_identifier: CBDB:278853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
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
        id: c_AZ6iPN2MBI_RbB2Bqi56_X
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WRxjQliNpV9W5WPMoKo-FB
          claim_id: c_AZ6iPN2MBI_RbB2Bqi56_X
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KQ6ArrG8dTNSX2Tu6p17mt
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 201827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json
            external_identifier: CBDB:201827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_rMcXaTlHmS0773bm1lM6YU
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZxy0L7T7JDFm1o4x2blKt
          claim_id: c_rMcXaTlHmS0773bm1lM6YU
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dd11Ucp3nBYq5pLBRoWsZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 201843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json
            external_identifier: CBDB:201843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
  other: []
---

# 王郁文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王郁文，明人物。中国历代人物传记资料库（CBDB）以人物编号 278853 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王郁文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |
| descendants | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 201843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json)
- [中国历代人物传记资料库：王完（CBDB 201827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json)
- [中国历代人物传记资料库：王郁文（CBDB 278853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278853&o=json)
