---
schema: wang-person/v1
id: p_tKaEVSh18AzjkSjVNVjE4q
status: active
merged_into: null
display_name: 王孫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wBp2FXP91S125qNBZaJ6c9
        subject_person_id: p_tKaEVSh18AzjkSjVNVjE4q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NfVaLRAHuBUQZZ8g5xC1CA
          claim_id: c_wBp2FXP91S125qNBZaJ6c9
          source_id: s_CFcqEs9yKCPDN49b8NohWb
          stance: supports
          locator: CBDB:139245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139245）
          source: &a1
            id: s_CFcqEs9yKCPDN49b8NohWb
            source_type: api_record
            title: 中国历代人物传记资料库：王孫（CBDB 139245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139245&o=json
            external_identifier: CBDB:139245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZVTE4BfDLF9tLD22ZR3a4q
        subject_person_id: p_tKaEVSh18AzjkSjVNVjE4q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 600年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQStzPFHJ1CK3Hq8rd8qoi
          claim_id: c_ZVTE4BfDLF9tLD22ZR3a4q
          source_id: s_CFcqEs9yKCPDN49b8NohWb
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
        id: c_YMvb1mcHRz5j3B7HtP1oc5
        subject_person_id: p_tKaEVSh18AzjkSjVNVjE4q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PvkXa3by3j987Zvs6HuCD1
          claim_id: c_YMvb1mcHRz5j3B7HtP1oc5
          source_id: s_CFcqEs9yKCPDN49b8NohWb
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
        id: c_fK4LcPsgoKxrzPWnV3KDny
        subject_person_id: p_tKaEVSh18AzjkSjVNVjE4q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫（600年—661年），唐人物。籍贯偃師。（中国历代人物传记资料库 CBDB 139245）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YFubZUg3GQdjQdVMrr_DxL
          claim_id: c_fK4LcPsgoKxrzPWnV3KDny
          source_id: s_CFcqEs9yKCPDN49b8NohWb
          stance: supports
          locator: CBDB:139245
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5BxoXk5zG6zJVlflxJWtOV
        subject_person_id: p_tKaEVSh18AzjkSjVNVjE4q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BY42hqQ8AFEiAtFih1539j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYk5hIYx4daXBDX5AiZwON
          claim_id: c_5BxoXk5zG6zJVlflxJWtOV
          source_id: s_zY7lOtnmtvE7Dz25jv4ugp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zY7lOtnmtvE7Dz25jv4ugp
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王孫妻)（CBDB 147706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147706&o=json
            external_identifier: CBDB:147706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BY42hqQ8AFEiAtFih1539j
        status: active
        display_name: 侯氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孫 | accepted |
| birth.date | 600年 | accepted |
| death.date | 661年 | accepted |
| bio.summary | 王孫（600年—661年），唐人物。籍贯偃師。（中国历代人物传记资料库 CBDB 139245） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BY42hqQ8AFEiAtFih1539j | 侯氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王孫妻)（CBDB 147706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147706&o=json)
- [中国历代人物传记资料库：王孫（CBDB 139245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139245&o=json)
