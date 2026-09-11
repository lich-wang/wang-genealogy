---
schema: wang-person/v1
id: p_18VWWVtKhkMLcAnQxRUhqA
status: active
merged_into: null
display_name: 王啟演
cbdb_id: 526690
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ApAtuWX2BpLKqAmEhGbJnP
        subject_person_id: p_18VWWVtKhkMLcAnQxRUhqA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟演，清人物。中国历代人物传记资料库（CBDB）以人物编号 526690 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GaCoBq4isPMDqRG-w7bkiw
          claim_id: c_ApAtuWX2BpLKqAmEhGbJnP
          source_id: s_wYhV5AYofP8dQbMPwzL7eV
          stance: supports
          locator: CBDB:526690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_wYhV5AYofP8dQbMPwzL7eV
            source_type: api_record
            title: 中国历代人物传记资料库：王啟演（CBDB 526690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526690&o=json
            external_identifier: CBDB:526690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4mT6q7CMCuACPqWWUWYypa
        subject_person_id: p_18VWWVtKhkMLcAnQxRUhqA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GiL6AcKHb5QDAXbor1wgfb
          claim_id: c_4mT6q7CMCuACPqWWUWYypa
          source_id: s_wYhV5AYofP8dQbMPwzL7eV
          stance: supports
          locator: CBDB:526690
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_wYhV5AYofP8dQbMPwzL7eV
            source_type: api_record
            title: 中国历代人物传记资料库：王啟演（CBDB 526690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526690&o=json
            external_identifier: CBDB:526690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x02sfnMGL7VONSIXDQLY41
        subject_person_id: p_62oSbowCwe2D4ZKHA95fvz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18VWWVtKhkMLcAnQxRUhqA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5nO5BNct49NzW2K7-WLLcN
          claim_id: c_x02sfnMGL7VONSIXDQLY41
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

# 王啟演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟演，清人物。中国历代人物传记资料库（CBDB）以人物编号 526690 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王啟演 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_62oSbowCwe2D4ZKHA95fvz | 王士祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟演（CBDB 526690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526690&o=json)
- [中国历代人物传记资料库：王士祿（CBDB 35060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35060&o=json)
