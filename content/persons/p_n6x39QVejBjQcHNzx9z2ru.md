---
schema: wang-person/v1
id: p_n6x39QVejBjQcHNzx9z2ru
status: active
merged_into: null
display_name: 康氏
revision: 1
cbdb_id: 268921
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hXHNVjg0kiAYooyxiclhrF
        subject_person_id: p_n6x39QVejBjQcHNzx9z2ru
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 康氏，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 268921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isDk_k6LRYtQRXTTCumlSe
          claim_id: c_hXHNVjg0kiAYooyxiclhrF
          source_id: s_ZmmPdR3tutk4mkdCs7cA4H
          stance: supports
          locator: CBDB:268921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZmmPdR3tutk4mkdCs7cA4H
            source_type: api_record
            title: 中国历代人物传记资料库：康氏(王璽妻)（CBDB 268921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268921&o=json
            external_identifier: CBDB:268921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Aush7upeXbF9livIyEtr5g
        subject_person_id: p_n6x39QVejBjQcHNzx9z2ru
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 康氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DV-16DExJYTaduMV8fTZFf
          claim_id: c_Aush7upeXbF9livIyEtr5g
          source_id: s_ZmmPdR3tutk4mkdCs7cA4H
          stance: supports
          locator: CBDB:268921
          quotation: null
          interpretation_note: CBDB 明确记录的王璽配偶
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
        id: c_EuDhep_pn5bpNpObCFCNiD
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_n6x39QVejBjQcHNzx9z2ru
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9UwGhNM7vk8a0k9MUxTh7
          claim_id: c_EuDhep_pn5bpNpObCFCNiD
          source_id: s_ZmmPdR3tutk4mkdCs7cA4H
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BNDHcwrQU46tvDsz7UJKUr
        status: active
        display_name: 王璽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 康氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 康氏，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 268921） | accepted |
| name.primary | 康氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BNDHcwrQU46tvDsz7UJKUr | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：康氏(王璽妻)（CBDB 268921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268921&o=json)
