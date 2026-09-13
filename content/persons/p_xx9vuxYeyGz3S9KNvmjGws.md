---
schema: wang-person/v1
id: p_xx9vuxYeyGz3S9KNvmjGws
status: merged
merged_into: p_3jndG2hj7kt16dVBTqH186
display_name: 王雱
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6YQZLVgPDvdXT85iVnwdrq
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JJFiC837wRNY7eRmMMs8U
          claim_id: c_6YQZLVgPDvdXT85iVnwdrq
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
          stance: supports
          locator: CBDB:3968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3968）
          source: &a1
            id: s_VNMo7fxsmxMDXyJHepPdy7
            source_type: api_record
            title: 中国历代人物传记资料库：王雱（CBDB 3968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3968&o=json
            external_identifier: CBDB:3968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u4Rw45NHTrpXDYdoamhvzy
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6pgAGpCH2oaPeFbkMp24k
          claim_id: c_u4Rw45NHTrpXDYdoamhvzy
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
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
        id: c_XcsnuTGMWfTqogPaJFzo15
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1076年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zs923FJSY7wi8QyF9CmzA
          claim_id: c_XcsnuTGMWfTqogPaJFzo15
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
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
        id: c_4eA79WKW7uAVtVFRTKLFEY
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雱（1044年—1076年），宋人物。籍贯臨川，身份为思想家，入仕進士，曾任待制、天章閣待制、左諫議大夫。（中国历代人物传记资料库 CBDB 3968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LFOWVvY6Br1S8CPlcYKpdK
          claim_id: c_4eA79WKW7uAVtVFRTKLFEY
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
          stance: supports
          locator: CBDB:3968
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

# 王雱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雱 | accepted |
| birth.date | 1044年 | accepted |
| death.date | 1076年 | accepted |
| bio.summary | 王雱（1044年—1076年），宋人物。籍贯臨川，身份为思想家，入仕進士，曾任待制、天章閣待制、左諫議大夫。（中国历代人物传记资料库 CBDB 3968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雱（CBDB 3968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3968&o=json)
