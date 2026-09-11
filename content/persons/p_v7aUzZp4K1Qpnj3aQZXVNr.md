---
schema: wang-person/v1
id: p_v7aUzZp4K1Qpnj3aQZXVNr
status: active
merged_into: null
display_name: 王士喆
cbdb_id: 526740
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSvvV71VAsGW369Kt2RspM
        subject_person_id: p_v7aUzZp4K1Qpnj3aQZXVNr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士喆，清人物。中国历代人物传记资料库（CBDB）以人物编号 526740 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yRqnsNnaBOsQcN9NhyInvI
          claim_id: c_HSvvV71VAsGW369Kt2RspM
          source_id: s_aWUswkEfMZKgysoYgFcJKm
          stance: supports
          locator: CBDB:526740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_aWUswkEfMZKgysoYgFcJKm
            source_type: api_record
            title: 中国历代人物传记资料库：王士喆（CBDB 526740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526740&o=json
            external_identifier: CBDB:526740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yN7vgqithzNiiHGEzs5Y7Q
        subject_person_id: p_v7aUzZp4K1Qpnj3aQZXVNr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士喆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XBJeKMTfX7mjmovcLx2FZX
          claim_id: c_yN7vgqithzNiiHGEzs5Y7Q
          source_id: s_aWUswkEfMZKgysoYgFcJKm
          stance: supports
          locator: CBDB:526740
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_aWUswkEfMZKgysoYgFcJKm
            source_type: api_record
            title: 中国历代人物传记资料库：王士喆（CBDB 526740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526740&o=json
            external_identifier: CBDB:526740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
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
  ancestors:
    - claim:
        id: c_cEUuRnB3Oh0gdW5GieKGx2
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v7aUzZp4K1Qpnj3aQZXVNr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxtRkAmi7NC0_f3O1Y0lMV
          claim_id: c_cEUuRnB3Oh0gdW5GieKGx2
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DMBn8xGP7ZCv2YPCy1RuG1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 69161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json
            external_identifier: CBDB:69161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bdBg1E6ZDUGtDs96L6kMgo
        status: active
        display_name: 王汝揆
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王士喆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士喆，清人物。中国历代人物传记资料库（CBDB）以人物编号 526740 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王士喆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bdBg1E6ZDUGtDs96L6kMgo | 王汝揆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝揆（CBDB 69161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json)
- [中国历代人物传记资料库：王士喆（CBDB 526740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526740&o=json)
