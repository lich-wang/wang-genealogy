---
schema: wang-person/v1
id: p_i9PK9zvHYqiP33ujDaLZTc
status: active
merged_into: null
display_name: 王德高
cbdb_id: 148219
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fb2spiSMQvBax54skCcMK9
        subject_person_id: p_i9PK9zvHYqiP33ujDaLZTc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德高，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148219 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_av3rehlwU6GaNMrHlrs9iv
          claim_id: c_fb2spiSMQvBax54skCcMK9
          source_id: s_zrRGBBCmyeSEEGZCf2Nt3d
          stance: supports
          locator: CBDB:148219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zrRGBBCmyeSEEGZCf2Nt3d
            source_type: api_record
            title: 中国历代人物传记资料库：王德高（CBDB 148219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148219&o=json
            external_identifier: CBDB:148219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pV7DiMv22nWoF3dkYnaRUe
        subject_person_id: p_i9PK9zvHYqiP33ujDaLZTc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hGxaMZgtYDLubzgVTNfZov
          claim_id: c_pV7DiMv22nWoF3dkYnaRUe
          source_id: s_zrRGBBCmyeSEEGZCf2Nt3d
          stance: supports
          locator: CBDB:148219
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_zrRGBBCmyeSEEGZCf2Nt3d
            source_type: api_record
            title: 中国历代人物传记资料库：王德高（CBDB 148219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148219&o=json
            external_identifier: CBDB:148219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZzI7VY857CJyZxQdyIp_lr
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i9PK9zvHYqiP33ujDaLZTc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iv0haAJhmE-uA8UtXlxBQ
          claim_id: c_ZzI7VY857CJyZxQdyIp_lr
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 36：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sQZNcK3Fy1x5k6jPQKt7L6
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 139515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139515&o=json
            external_identifier: CBDB:139515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_igdQuKMftZdo9KJqFgfBZY
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德高，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148219 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王德高 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_igdQuKMftZdo9KJqFgfBZY | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德高（CBDB 148219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148219&o=json)
- [中国历代人物传记资料库：王端（CBDB 139515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139515&o=json)
