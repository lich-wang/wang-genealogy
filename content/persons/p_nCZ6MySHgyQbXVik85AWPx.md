---
schema: wang-person/v1
id: p_nCZ6MySHgyQbXVik85AWPx
status: active
merged_into: null
display_name: 王啟浣
cbdb_id: 526689
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RcjEYD4zUWMGtwFFXED4Dz
        subject_person_id: p_nCZ6MySHgyQbXVik85AWPx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟浣，清人物。中国历代人物传记资料库（CBDB）以人物编号 526689 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_0Mkx6I-Im2rHK9gawk8Ntp
          claim_id: c_RcjEYD4zUWMGtwFFXED4Dz
          source_id: s_7WVLLxRH9Vk3QLddzn1Bsg
          stance: supports
          locator: CBDB:526689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_7WVLLxRH9Vk3QLddzn1Bsg
            source_type: api_record
            title: 中国历代人物传记资料库：王啟浣（CBDB 526689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526689&o=json
            external_identifier: CBDB:526689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uwsegNRCxJkxJN9MX4NQ1D
        subject_person_id: p_nCZ6MySHgyQbXVik85AWPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟浣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eKAq6MxGXU22kcaWVVWoLV
          claim_id: c_uwsegNRCxJkxJN9MX4NQ1D
          source_id: s_7WVLLxRH9Vk3QLddzn1Bsg
          stance: supports
          locator: CBDB:526689
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_7WVLLxRH9Vk3QLddzn1Bsg
            source_type: api_record
            title: 中国历代人物传记资料库：王啟浣（CBDB 526689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526689&o=json
            external_identifier: CBDB:526689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w53oub_mKclw2ydwyuvrzG
        subject_person_id: p_62oSbowCwe2D4ZKHA95fvz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nCZ6MySHgyQbXVik85AWPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KMa-m8YHEyePfxlVcYF-0d
          claim_id: c_w53oub_mKclw2ydwyuvrzG
          source_id: s_eKiRAQszeL6yob4tQww771
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12777：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eKiRAQszeL6yob4tQww771
            source_type: api_record
            title: 中国历代人物传记资料库：王士祿（CBDB 35060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35060&o=json
            external_identifier: CBDB:35060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_62oSbowCwe2D4ZKHA95fvz
        status: active
        display_name: 王士祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟浣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟浣，清人物。中国历代人物传记资料库（CBDB）以人物编号 526689 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王啟浣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_62oSbowCwe2D4ZKHA95fvz | 王士祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟浣（CBDB 526689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526689&o=json)
- [中国历代人物传记资料库：王士祿（CBDB 35060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35060&o=json)
