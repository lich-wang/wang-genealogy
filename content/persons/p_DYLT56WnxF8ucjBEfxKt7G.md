---
schema: wang-person/v1
id: p_DYLT56WnxF8ucjBEfxKt7G
status: active
merged_into: null
display_name: 王和
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eiz73WEfUVZ619Qam3qp2n
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3TonPoMXe4CP9JDonj4mb
          claim_id: c_eiz73WEfUVZ619Qam3qp2n
          source_id: s_TrbZ1QLxmczCSANfHPm41D
          stance: supports
          locator: CBDB:139519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139519）
          source: &a1
            id: s_TrbZ1QLxmczCSANfHPm41D
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 139519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139519&o=json
            external_identifier: CBDB:139519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aAV51GPTWqhbevZYnrkHDW
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 589年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_heTQehb3LhSToxJkZGk3HR
          claim_id: c_aAV51GPTWqhbevZYnrkHDW
          source_id: s_TrbZ1QLxmczCSANfHPm41D
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
        id: c_zWcCHHp7Qu3da34KkAByRk
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYcarXjtcYmrsvq2ACBgL4
          claim_id: c_zWcCHHp7Qu3da34KkAByRk
          source_id: s_TrbZ1QLxmczCSANfHPm41D
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
        id: c_9ZLo1S3fPrjmJKEwGXCWaS
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和（589年—667年），唐人物。籍贯太原，曾任錄事參軍、縣令、州司法參軍。（中国历代人物传记资料库 CBDB 139519）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3yOGa7XUs4W8OCTtMw_vYF
          claim_id: c_9ZLo1S3fPrjmJKEwGXCWaS
          source_id: s_TrbZ1QLxmczCSANfHPm41D
          stance: supports
          locator: CBDB:139519
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T0B4l_pD03RmTNbvzA9K4q
        subject_person_id: p_yKiEYZhExh7QE7KLEomey3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SudUC1vqCXjeYYHXOjNgR9
          claim_id: c_T0B4l_pD03RmTNbvzA9K4q
          source_id: s_TrbZ1QLxmczCSANfHPm41D
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 40：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yKiEYZhExh7QE7KLEomey3
        status: active
        display_name: 王護
        merged_into_person_id: null
  children:
    - claim:
        id: c_yWGvO99YqO_A0PXdD4JKJ0
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_33cmq4u7DNW9QidGhiaNeK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MNtu8lMFEkaNCwa6gPT8Ol
          claim_id: c_yWGvO99YqO_A0PXdD4JKJ0
          source_id: s_TrbZ1QLxmczCSANfHPm41D
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 40：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_33cmq4u7DNW9QidGhiaNeK
        status: active
        display_name: 王慈質
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LTBgZMleC1TtEEyXQPnubi
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PzUfWKQMrNFrkZbrd7NVvL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0CVe_8RboK6jzhLi7zFYhV
          claim_id: c_LTBgZMleC1TtEEyXQPnubi
          source_id: s_TqmTmxShT3pA1oDXLUXlsB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 40：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TqmTmxShT3pA1oDXLUXlsB
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王和妻)（CBDB 148231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148231&o=json
            external_identifier: CBDB:148231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PzUfWKQMrNFrkZbrd7NVvL
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| birth.date | 589年 | accepted |
| death.date | 667年 | accepted |
| bio.summary | 王和（589年—667年），唐人物。籍贯太原，曾任錄事參軍、縣令、州司法參軍。（中国历代人物传记资料库 CBDB 139519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yKiEYZhExh7QE7KLEomey3 | 王護 | accepted |
| children | p_33cmq4u7DNW9QidGhiaNeK | 王慈質 | accepted |
| spouses | p_PzUfWKQMrNFrkZbrd7NVvL | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王和妻)（CBDB 148231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148231&o=json)
- [中国历代人物传记资料库：王和（CBDB 139519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139519&o=json)
