---
schema: wang-person/v1
id: p_AZU8RNToB3tdY2LBTupNqA
status: active
merged_into: null
display_name: 王定柱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2NmgHgKzaipLGJr2FGbvJ
        subject_person_id: p_AZU8RNToB3tdY2LBTupNqA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vLMshi2vMMGK1ZaBxfq1c1
          claim_id: c_L2NmgHgKzaipLGJr2FGbvJ
          source_id: s_47NjvJvsS91CaFybhimuMG
          stance: supports
          locator: CBDB:71817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71817）
          source: &a1
            id: s_47NjvJvsS91CaFybhimuMG
            source_type: api_record
            title: 中国历代人物传记资料库：王定柱（CBDB 71817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71817&o=json
            external_identifier: CBDB:71817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FtVFFVy5PFkJ7EDxFBp5nM
        subject_person_id: p_AZU8RNToB3tdY2LBTupNqA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1761年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNmmNeLs1hF7cR5FdH23tf
          claim_id: c_FtVFFVy5PFkJ7EDxFBp5nM
          source_id: s_47NjvJvsS91CaFybhimuMG
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
        id: c_BpN1wkTtvQ7rvfsQrLFZKR
        subject_person_id: p_AZU8RNToB3tdY2LBTupNqA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1830年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ANj1RXrn3LKwsZtYhxuGfU
          claim_id: c_BpN1wkTtvQ7rvfsQrLFZKR
          source_id: s_47NjvJvsS91CaFybhimuMG
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
        id: c_kcixXeZWAQyqPDXBpbeZbE
        subject_person_id: p_AZU8RNToB3tdY2LBTupNqA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定柱（1761年—1830年），清人物。籍贯正定。（中国历代人物传记资料库 CBDB 71817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8M9wuS499uYqVD8zWICiZl
          claim_id: c_kcixXeZWAQyqPDXBpbeZbE
          source_id: s_47NjvJvsS91CaFybhimuMG
          stance: supports
          locator: CBDB:71817
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
  descendants: []
  other: []
---

# 王定柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定柱 | accepted |
| birth.date | 1761年 | accepted |
| death.date | 1830年 | accepted |
| bio.summary | 王定柱（1761年—1830年），清人物。籍贯正定。（中国历代人物传记资料库 CBDB 71817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定柱（CBDB 71817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71817&o=json)
