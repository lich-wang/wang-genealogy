---
schema: wang-person/v1
id: p_jPaziDtaCGEkP8PcqETeGP
status: active
merged_into: null
display_name: 王遇龍
cbdb_id: 38280
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zr7gAzfz1FZ3Wst5Mfmbei
        subject_person_id: p_jPaziDtaCGEkP8PcqETeGP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇龍（生于1208年），宋人物。寶祐進士，籍贯資陽，身份为經學家—易經，入仕進士。（中国历代人物传记资料库 CBDB 38280）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cmy1nvhKYIhUhsfXM7zU68
          claim_id: c_Zr7gAzfz1FZ3Wst5Mfmbei
          source_id: s_eV4jMhZbo1tw5F5kHMLErL
          stance: supports
          locator: CBDB:38280
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eV4jMhZbo1tw5F5kHMLErL
            source_type: api_record
            title: 中国历代人物传记资料库：王遇龍（CBDB 38280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38280&o=json
            external_identifier: CBDB:38280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5B3qhWFaqsEP7zYa29N7hZ
        subject_person_id: p_jPaziDtaCGEkP8PcqETeGP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1208年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1208-01-01
            latest: 1208-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LQP7c2hQD2dQd8he9Sa9gc
          claim_id: c_5B3qhWFaqsEP7zYa29N7hZ
          source_id: s_eV4jMhZbo1tw5F5kHMLErL
          stance: supports
          locator: CBDB:38280
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1208
          source:
            id: s_eV4jMhZbo1tw5F5kHMLErL
            source_type: api_record
            title: 中国历代人物传记资料库：王遇龍（CBDB 38280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38280&o=json
            external_identifier: CBDB:38280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Q799Jw4kzaNQjP8t2q42w
        subject_person_id: p_jPaziDtaCGEkP8PcqETeGP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R3hVRqBy5VYnoJG1KHCRdE
          claim_id: c_2Q799Jw4kzaNQjP8t2q42w
          source_id: s_eV4jMhZbo1tw5F5kHMLErL
          stance: supports
          locator: CBDB:38280
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1208
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HWxm1aUciUchB5Spy1BOge
        subject_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jPaziDtaCGEkP8PcqETeGP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvO4Ov7qhg4qvdIeXvECYD
          claim_id: c_HWxm1aUciUchB5Spy1BOge
          source_id: s_wKTwhruwXx5t81q3BiBCST
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wKTwhruwXx5t81q3BiBCST
            source_type: api_record
            title: 中国历代人物传记资料库：王昌辰（CBDB 136387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136387&o=json
            external_identifier: CBDB:136387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pv61XtHSxxg2PJ1X8CE9a2
        status: active
        display_name: 王昌辰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bPMSmHWm8BXkCE8Tzs6ngW
        subject_person_id: p_1dbPFx8DinJSbnFHKJaKLg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jPaziDtaCGEkP8PcqETeGP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5d4gREeqleQohgLiwS8lv6
          claim_id: c_bPMSmHWm8BXkCE8Tzs6ngW
          source_id: s_UcVCtCYEUmDYJZRBW9pJed
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UcVCtCYEUmDYJZRBW9pJed
            source_type: api_record
            title: 中国历代人物传记资料库：王之結（CBDB 137842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137842&o=json
            external_identifier: CBDB:137842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1dbPFx8DinJSbnFHKJaKLg
        status: active
        display_name: 王之結
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遇龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遇龍（生于1208年），宋人物。寶祐進士，籍贯資陽，身份为經學家—易經，入仕進士。（中国历代人物传记资料库 CBDB 38280） | accepted |
| birth.date | 1208年 | accepted |
| name.primary | 王遇龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pv61XtHSxxg2PJ1X8CE9a2 | 王昌辰 | accepted |
| ancestors | p_1dbPFx8DinJSbnFHKJaKLg | 王之結 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌辰（CBDB 136387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136387&o=json)
- [中国历代人物传记资料库：王遇龍（CBDB 38280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38280&o=json)
- [中国历代人物传记资料库：王之結（CBDB 137842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137842&o=json)
