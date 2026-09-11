---
schema: wang-person/v1
id: p_cCprcjpjpt289qr3jZC2GQ
status: active
merged_into: null
display_name: 王覺
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDk75NtE9AfV8jhYCBm4qM
        subject_person_id: p_cCprcjpjpt289qr3jZC2GQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UfjhAQVNS6bXcZNEVTunAK
          claim_id: c_NDk75NtE9AfV8jhYCBm4qM
          source_id: s_ZSdKzGJp6igAZNSc87NZR5
          stance: supports
          locator: CBDB:203312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203312）
          source: &a1
            id: s_ZSdKzGJp6igAZNSc87NZR5
            source_type: api_record
            title: 中国历代人物传记资料库：王覺（CBDB 203312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203312&o=json
            external_identifier: CBDB:203312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EGkc6LDzqGYRfCoHeCTPiG
        subject_person_id: p_cCprcjpjpt289qr3jZC2GQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_92FvbKLKwC9cfZZKUFKbJP
          claim_id: c_EGkc6LDzqGYRfCoHeCTPiG
          source_id: s_ZSdKzGJp6igAZNSc87NZR5
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
        id: c_JtKPe2K7FgJMiXDAub8Ljt
        subject_person_id: p_cCprcjpjpt289qr3jZC2GQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tgnmzaDJrcmKVjhCX1AFKt
          claim_id: c_JtKPe2K7FgJMiXDAub8Ljt
          source_id: s_ZSdKzGJp6igAZNSc87NZR5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fqPaSmwVV6r7i3nxAcJJux
        subject_person_id: p_ro7GYSKBBDqCzJ8e72aFTy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCprcjpjpt289qr3jZC2GQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7ZqDudC87BDDaaqBZDV9N
          claim_id: c_fqPaSmwVV6r7i3nxAcJJux
          source_id: s_DspLg139gMwWCcSBdVEEMT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DspLg139gMwWCcSBdVEEMT
            source_type: api_record
            title: 中国历代人物传记资料库：王覲（CBDB 302885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302885&o=json
            external_identifier: CBDB:302885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ro7GYSKBBDqCzJ8e72aFTy
        status: active
        display_name: 王覲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AfMc1Qk0RwieDJUQwtG6cC
        subject_person_id: p_CA4Q5gcvgzeJoH8RJhoEG2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cCprcjpjpt289qr3jZC2GQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SONDPNkWU0kGjXbtSvjPq1
          claim_id: c_AfMc1Qk0RwieDJUQwtG6cC
          source_id: s_6QQUm2xKwJ98K72BbtdUmW
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6QQUm2xKwJ98K72BbtdUmW
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 302883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302883&o=json
            external_identifier: CBDB:302883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CA4Q5gcvgzeJoH8RJhoEG2
        status: active
        display_name: 王珩
        merged_into_person_id: null
    - claim:
        id: c_K0pWNCwHnQREtBnlMbBrqg
        subject_person_id: p_KKQUTZbWVGUi22TjDZjcVk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cCprcjpjpt289qr3jZC2GQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVu5TTxZWAma1kTRIOVnxF
          claim_id: c_K0pWNCwHnQREtBnlMbBrqg
          source_id: s_cQp7mvPybg1TxVa53VaeFL
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cQp7mvPybg1TxVa53VaeFL
            source_type: api_record
            title: 中国历代人物传记资料库：王尹（CBDB 302884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302884&o=json
            external_identifier: CBDB:302884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KKQUTZbWVGUi22TjDZjcVk
        status: active
        display_name: 王尹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王覺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覺 | accepted |
| birth.date | 1492年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ro7GYSKBBDqCzJ8e72aFTy | 王覲 | accepted |
| ancestors | p_CA4Q5gcvgzeJoH8RJhoEG2 | 王珩 | accepted |
| ancestors | p_KKQUTZbWVGUi22TjDZjcVk | 王尹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 302883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302883&o=json)
- [中国历代人物传记资料库：王覲（CBDB 302885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302885&o=json)
- [中国历代人物传记资料库：王覺（CBDB 203312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203312&o=json)
- [中国历代人物传记资料库：王尹（CBDB 302884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302884&o=json)
