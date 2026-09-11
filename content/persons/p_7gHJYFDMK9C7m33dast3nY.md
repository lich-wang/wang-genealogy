---
schema: wang-person/v1
id: p_7gHJYFDMK9C7m33dast3nY
status: active
merged_into: null
display_name: 王廷佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MkSe9B5ebdDfikv6jK6NSd
        subject_person_id: p_7gHJYFDMK9C7m33dast3nY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xh5mkZuBucT31Q3TErk9GE
          claim_id: c_MkSe9B5ebdDfikv6jK6NSd
          source_id: s_YSYV1BQmHWoLw2YKKoYwBL
          stance: supports
          locator: CBDB:71558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71558）
          source: &a1
            id: s_YSYV1BQmHWoLw2YKKoYwBL
            source_type: api_record
            title: 中国历代人物传记资料库：王廷佐（CBDB 71558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71558&o=json
            external_identifier: CBDB:71558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_s4NjxU5ohJEH6N4rDnURGV
        subject_person_id: p_7gHJYFDMK9C7m33dast3nY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1745年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xD8ueuxsKV7XW6Qm72Mkuj
          claim_id: c_s4NjxU5ohJEH6N4rDnURGV
          source_id: s_YSYV1BQmHWoLw2YKKoYwBL
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
        id: c_PWedNF58GSjeEvoJ52zQJQ
        subject_person_id: p_7gHJYFDMK9C7m33dast3nY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1775年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CyteD7p8AhsDfMPBrPzCsY
          claim_id: c_PWedNF58GSjeEvoJ52zQJQ
          source_id: s_YSYV1BQmHWoLw2YKKoYwBL
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
        id: c_AnCxUJfJ9tdGKh9Pstv32G
        subject_person_id: p_7gHJYFDMK9C7m33dast3nY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷佐（1745年—1775年），清人物。籍贯山陽，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任都司、千總、訓導。（中国历代人物传记资料库 CBDB 71558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m42uNL3GKZlqz-8bu-rAmx
          claim_id: c_AnCxUJfJ9tdGKh9Pstv32G
          source_id: s_YSYV1BQmHWoLw2YKKoYwBL
          stance: supports
          locator: CBDB:71558
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

# 王廷佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷佐 | accepted |
| birth.date | 1745年 | accepted |
| death.date | 1775年 | accepted |
| bio.summary | 王廷佐（1745年—1775年），清人物。籍贯山陽，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任都司、千總、訓導。（中国历代人物传记资料库 CBDB 71558） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷佐（CBDB 71558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71558&o=json)
