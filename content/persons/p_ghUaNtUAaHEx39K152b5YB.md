---
schema: wang-person/v1
id: p_ghUaNtUAaHEx39K152b5YB
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J7py5SAyjBbs35M3jN3wcq
        subject_person_id: p_ghUaNtUAaHEx39K152b5YB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PN4Toz4Zzbi3wictD8wNhr
          claim_id: c_J7py5SAyjBbs35M3jN3wcq
          source_id: s_QvbsRG4DZLeX18L8A4kSdr
          stance: supports
          locator: CBDB:100859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100859）
          source: &a1
            id: s_QvbsRG4DZLeX18L8A4kSdr
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 100859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100859&o=json
            external_identifier: CBDB:100859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uKv3o37X3B66sdR7TbvFtH
        subject_person_id: p_ghUaNtUAaHEx39K152b5YB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1272年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcGhAUyxS5EuqF5WpBa4aL
          claim_id: c_uKv3o37X3B66sdR7TbvFtH
          source_id: s_QvbsRG4DZLeX18L8A4kSdr
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
        id: c_Mo3YkioaBVNDrT9c3aGNzj
        subject_person_id: p_ghUaNtUAaHEx39K152b5YB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫（卒于1272年），元人物。曾任都轉運使。（中国历代人物传记资料库 CBDB 100859）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y-XZ-ELsB7Ki344v1W9AbE
          claim_id: c_Mo3YkioaBVNDrT9c3aGNzj
          source_id: s_QvbsRG4DZLeX18L8A4kSdr
          stance: supports
          locator: CBDB:100859
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

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| death.date | 1272年 | accepted |
| bio.summary | 王楫（卒于1272年），元人物。曾任都轉運使。（中国历代人物传记资料库 CBDB 100859） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 100859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100859&o=json)
