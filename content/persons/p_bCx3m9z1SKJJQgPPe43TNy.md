---
schema: wang-person/v1
id: p_bCx3m9z1SKJJQgPPe43TNy
status: active
merged_into: null
display_name: 王明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d5Ca4SanAL6pGhgc4pr2Qm
        subject_person_id: p_bCx3m9z1SKJJQgPPe43TNy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1EE3eKR3cZBYASnhL4Sx44
          claim_id: c_d5Ca4SanAL6pGhgc4pr2Qm
          source_id: s_iNSAmRV4GFJcDnvqyAQD9p
          stance: supports
          locator: CBDB:274337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274337）
          source: &a1
            id: s_iNSAmRV4GFJcDnvqyAQD9p
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 274337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274337&o=json
            external_identifier: CBDB:274337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDDotSZhLCtDHt5f6CJSvt
        subject_person_id: p_bCx3m9z1SKJJQgPPe43TNy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8qJTLyWpxDV4bhztWUxPIM
          claim_id: c_CDDotSZhLCtDHt5f6CJSvt
          source_id: s_iNSAmRV4GFJcDnvqyAQD9p
          stance: supports
          locator: CBDB:274337
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_rTY9WrH25phLT2-qqd0MaO
        subject_person_id: p_bCx3m9z1SKJJQgPPe43TNy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JAoTUHu__zrqv5GOQK0eeA
          claim_id: c_rTY9WrH25phLT2-qqd0MaO
          source_id: s_iNSAmRV4GFJcDnvqyAQD9p
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kegtQkxMvsxG83EpfKScwb
        status: active
        display_name: 王昂
        merged_into_person_id: null
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274337） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kegtQkxMvsxG83EpfKScwb | 王昂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 274337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274337&o=json)
