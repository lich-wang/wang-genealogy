---
schema: wang-person/v1
id: p_4XfohGCYGY64cxmmYAKkaR
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XZGGBer9EQCwECCuZ8sThD
        subject_person_id: p_4XfohGCYGY64cxmmYAKkaR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8v6a6r98yLmT1gkxEsFd7R
          claim_id: c_XZGGBer9EQCwECCuZ8sThD
          source_id: s_uKg2RTXMn6V7ntnXdQnXfD
          stance: supports
          locator: CBDB:1858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1858）
          source: &a1
            id: s_uKg2RTXMn6V7ntnXdQnXfD
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 1858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1858&o=json
            external_identifier: CBDB:1858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ABo29VGogeLVFKFJLuWyQX
        subject_person_id: p_4XfohGCYGY64cxmmYAKkaR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 923年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6Qs8GfQ2TUvAqQQcn136o
          claim_id: c_ABo29VGogeLVFKFJLuWyQX
          source_id: s_uKg2RTXMn6V7ntnXdQnXfD
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
        id: c_bkY7jPNg5r1kCN96ANPB4B
        subject_person_id: p_4XfohGCYGY64cxmmYAKkaR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 995年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fL4kej5WiCkJkMUfoQsCQh
          claim_id: c_bkY7jPNg5r1kCN96ANPB4B
          source_id: s_uKg2RTXMn6V7ntnXdQnXfD
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
        id: c_Xjik7AHoDxvzoUECv8gwjF
        subject_person_id: p_4XfohGCYGY64cxmmYAKkaR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓（923年—995年），宋人物。籍贯長社，身份为武將、精於騎射，入仕軍員轉補，曾任發運使、水路發運使、都監。（中国历代人物传记资料库 CBDB 1858）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VRih5vTeBkAQVpE7Tr7EBe
          claim_id: c_Xjik7AHoDxvzoUECv8gwjF
          source_id: s_uKg2RTXMn6V7ntnXdQnXfD
          stance: supports
          locator: CBDB:1858
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 923年 | accepted |
| death.date | 995年 | accepted |
| bio.summary | 王賓（923年—995年），宋人物。籍贯長社，身份为武將、精於騎射，入仕軍員轉補，曾任發運使、水路發運使、都監。（中国历代人物传记资料库 CBDB 1858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 1858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1858&o=json)
