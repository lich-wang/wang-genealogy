---
schema: wang-person/v1
id: p_vDzf6isJ8G9fr8y7scc2fq
status: active
merged_into: null
display_name: 王崑
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XNS3CJJxAgs7xWepLFdBr
        subject_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mvycMLzdzb8Epo34H6bvjw
          claim_id: c_8XNS3CJJxAgs7xWepLFdBr
          source_id: s_WbmeJ61SBQzh5H1WL384BZ
          stance: supports
          locator: CBDB:201957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201957）
          source: &a1
            id: s_WbmeJ61SBQzh5H1WL384BZ
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 201957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201957&o=json
            external_identifier: CBDB:201957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_761jLhPTjHWZqk6nApmhyN
        subject_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8CXYvNdV58bEG1qwBPhKDY
          claim_id: c_761jLhPTjHWZqk6nApmhyN
          source_id: s_WbmeJ61SBQzh5H1WL384BZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HfN8VU9A3PBfmPtqDSWqsz
        subject_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑（生于1478年），明人物。明清進士進士，籍贯靈璧，入仕進士。（中国历代人物传记资料库 CBDB 201957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hac3hmK0T078ivNy5hil9C
          claim_id: c_HfN8VU9A3PBfmPtqDSWqsz
          source_id: s_WbmeJ61SBQzh5H1WL384BZ
          stance: supports
          locator: CBDB:201957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RDRDDTUjrsqGd1-StLBJef
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMWrkP_oDMFCnUeZLmgrTe
          claim_id: c_RDRDDTUjrsqGd1-StLBJef
          source_id: s_oRCAgNvVuPRjjqBzMZFSP8
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oRCAgNvVuPRjjqBzMZFSP8
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 257073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257073&o=json
            external_identifier: CBDB:257073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1fEzNtyPjCg5rqRonPekKp
        status: active
        display_name: 王澤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tMv6fgFMjBVfk4U1Bt7Yeq
        subject_person_id: p_iDHYjbUs9Cnr7wU4NATWxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X2_VDbZkO9zS76DnUEHjLs
          claim_id: c_tMv6fgFMjBVfk4U1Bt7Yeq
          source_id: s_CBakdwAKt5Yhs5EzXoKTkB
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CBakdwAKt5Yhs5EzXoKTkB
            source_type: api_record
            title: 中国历代人物传记资料库：王致遠（CBDB 257071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257071&o=json
            external_identifier: CBDB:257071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iDHYjbUs9Cnr7wU4NATWxS
        status: active
        display_name: 王致遠
        merged_into_person_id: null
    - claim:
        id: c_dVGzw9cAQLJt9u1VqlphiH
        subject_person_id: p_PKmXoEz6WVxAL58MjFwTD2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kr6_aUSul1R4fcVXyI5qYZ
          claim_id: c_dVGzw9cAQLJt9u1VqlphiH
          source_id: s_irHFsBsd3Vj6JT14getcVT
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_irHFsBsd3Vj6JT14getcVT
            source_type: api_record
            title: 中国历代人物传记资料库：王景信（CBDB 257072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json
            external_identifier: CBDB:257072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PKmXoEz6WVxAL58MjFwTD2
        status: active
        display_name: 王景信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | 王崑（生于1478年），明人物。明清進士進士，籍贯靈璧，入仕進士。（中国历代人物传记资料库 CBDB 201957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1fEzNtyPjCg5rqRonPekKp | 王澤 | accepted |
| ancestors | p_iDHYjbUs9Cnr7wU4NATWxS | 王致遠 | accepted |
| ancestors | p_PKmXoEz6WVxAL58MjFwTD2 | 王景信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景信（CBDB 257072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json)
- [中国历代人物传记资料库：王崑（CBDB 201957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201957&o=json)
- [中国历代人物传记资料库：王澤（CBDB 257073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257073&o=json)
- [中国历代人物传记资料库：王致遠（CBDB 257071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257071&o=json)
