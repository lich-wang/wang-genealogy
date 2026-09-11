---
schema: wang-person/v1
id: p_awVba6ceCU97BSyUH4tnLy
status: active
merged_into: null
display_name: 王貞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b6hjcqJKpzeyDutzUaHtux
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNJCUXcTHGLZbihpga7ZZK
          claim_id: c_b6hjcqJKpzeyDutzUaHtux
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: CBDB:140124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140124）
          source: &a1
            id: s_VJr7Vz53eu5S9mJ22g5diG
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 140124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140124&o=json
            external_identifier: CBDB:140124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B7mGGNUmYZsHHNfKed485K
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 644年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeVnga5LkqLKcFPNmnuT2h
          claim_id: c_B7mGGNUmYZsHHNfKed485K
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NNFaQKoAA6fnAEGQexiBc4
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 694年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kpt43m82XFfK3J9CPXXCDD
          claim_id: c_NNFaQKoAA6fnAEGQexiBc4
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sJtcWLvPPGgAQsKoidwhB5
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞（644年—694年），周人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 140124）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xmkvfUj7SfIANWXqigDp7J
          claim_id: c_sJtcWLvPPGgAQsKoidwhB5
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: CBDB:140124
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KUQrv3P53xkct5sVK4yvcl
        subject_person_id: p_WDbStzk1vKSr1wJ371bPnz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_awVba6ceCU97BSyUH4tnLy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SVtEqxa7s4SbnXvpj-_wB4
          claim_id: c_KUQrv3P53xkct5sVK4yvcl
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 19：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WDbStzk1vKSr1wJ371bPnz
        status: active
        display_name: 王義
        merged_into_person_id: null
  children:
    - claim:
        id: c_X2wrTS0KOyiAFzRh98vg_X
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TsNWxPtWYfbjArJ5iJazN1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erhmuS2MlrLJfljIQ0GA_z
          claim_id: c_X2wrTS0KOyiAFzRh98vg_X
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 19：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TsNWxPtWYfbjArJ5iJazN1
        status: active
        display_name: 王庭芝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_D0jTZfRKjV7zotxlpeZswN
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8be6UEB7Xx5jEJpqV5asQ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMxH90tw5GbZzVwlc0o5nt
          claim_id: c_D0jTZfRKjV7zotxlpeZswN
          source_id: s_Ym9YWqipNcJbbOcit_BcEZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 19：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ym9YWqipNcJbbOcit_BcEZ
            source_type: api_record
            title: 中国历代人物传记资料库：秦氏(王貞妻)（CBDB 150354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150354&o=json
            external_identifier: CBDB:150354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8be6UEB7Xx5jEJpqV5asQ3
        status: active
        display_name: 秦氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| birth.date | 644年 | accepted |
| death.date | 694年 | accepted |
| bio.summary | 王貞（644年—694年），周人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 140124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WDbStzk1vKSr1wJ371bPnz | 王義 | accepted |
| children | p_TsNWxPtWYfbjArJ5iJazN1 | 王庭芝 | accepted |
| spouses | p_8be6UEB7Xx5jEJpqV5asQ3 | 秦氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：秦氏(王貞妻)（CBDB 150354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150354&o=json)
- [中国历代人物传记资料库：王貞（CBDB 140124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140124&o=json)
