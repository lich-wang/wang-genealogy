---
schema: wang-person/v1
id: p_pUXdNRAD1FvX6k67eRhUyH
status: active
merged_into: null
display_name: 王啟㴶
cbdb_id: 526680
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bRiZceKXfDw8daF51eho3B
        subject_person_id: p_pUXdNRAD1FvX6k67eRhUyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟㴶，清人物。中国历代人物传记资料库（CBDB）以人物编号 526680 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_-TMvdhaXI5vk2ZRo0kXLVp
          claim_id: c_bRiZceKXfDw8daF51eho3B
          source_id: s_JX7VnWqqMQAw7Z4QtkK6FU
          stance: supports
          locator: CBDB:526680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_JX7VnWqqMQAw7Z4QtkK6FU
            source_type: api_record
            title: 中国历代人物传记资料库：王啟㴶（CBDB 526680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526680&o=json
            external_identifier: CBDB:526680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDC9DjStYHGbjREaS6bj34
        subject_person_id: p_pUXdNRAD1FvX6k67eRhUyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟㴶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dyewyojWK8PGVTKJNL76Z5
          claim_id: c_nDC9DjStYHGbjREaS6bj34
          source_id: s_JX7VnWqqMQAw7Z4QtkK6FU
          stance: supports
          locator: CBDB:526680
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_JX7VnWqqMQAw7Z4QtkK6FU
            source_type: api_record
            title: 中国历代人物传记资料库：王啟㴶（CBDB 526680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526680&o=json
            external_identifier: CBDB:526680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yWoPbG78zradEZ17osDxHv
        subject_person_id: p_PqJivP1sBKeAv7sst51d32
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_pUXdNRAD1FvX6k67eRhUyH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8E1m3zgMk8nWbAUS1m4k98
          claim_id: c_yWoPbG78zradEZ17osDxHv
          source_id: s_FRxccvFRg6gk5acJEUQ2R5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source:
            id: s_FRxccvFRg6gk5acJEUQ2R5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士祜（35062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35062&o=json
            external_identifier: CBDB:35062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:06.972Z
            metadata_json: null
      object_person:
        id: p_PqJivP1sBKeAv7sst51d32
        status: active
        display_name: 王士祜
        merged_into_person_id: null
    - claim:
        id: c_66MSQ51a9KMwngMNd31f6z
        subject_person_id: p_PqJivP1sBKeAv7sst51d32
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pUXdNRAD1FvX6k67eRhUyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJrAZX7plT_VRypmIXZXsK
          claim_id: c_66MSQ51a9KMwngMNd31f6z
          source_id: s_FRxccvFRg6gk5acJEUQ2R5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12768：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FRxccvFRg6gk5acJEUQ2R5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士祜（35062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35062&o=json
            external_identifier: CBDB:35062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:06.972Z
            metadata_json: null
      object_person:
        id: p_PqJivP1sBKeAv7sst51d32
        status: active
        display_name: 王士祜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟㴶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟㴶，清人物。中国历代人物传记资料库（CBDB）以人物编号 526680 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王啟㴶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PqJivP1sBKeAv7sst51d32 | 王士祜 | accepted |
| parents | p_PqJivP1sBKeAv7sst51d32 | 王士祜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟㴶（CBDB 526680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526680&o=json)
- [CBDB 中国历代人物传记资料库：王士祜（35062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35062&o=json)
