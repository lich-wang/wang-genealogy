---
schema: wang-person/v1
id: p_YFd34MvThiv8hxr2dYFSzj
status: active
merged_into: null
display_name: 王強
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNPSUTan1D52SmXJ9Kergw
        subject_person_id: p_YFd34MvThiv8hxr2dYFSzj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王強
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tJ7VT75N7TAtXE1obsMjZP
          claim_id: c_CNPSUTan1D52SmXJ9Kergw
          source_id: s_moxC1PEqLCJZdqq5Go2jwc
          stance: supports
          locator: CBDB:139715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139715）
          source: &a1
            id: s_moxC1PEqLCJZdqq5Go2jwc
            source_type: api_record
            title: 中国历代人物传记资料库：王強（CBDB 139715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139715&o=json
            external_identifier: CBDB:139715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E6wKh1gTdp3VKH5dvzjcyg
        subject_person_id: p_YFd34MvThiv8hxr2dYFSzj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CZTVExKNWAqUXkg9RWfY1K
          claim_id: c_E6wKh1gTdp3VKH5dvzjcyg
          source_id: s_moxC1PEqLCJZdqq5Go2jwc
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
        id: c_a44kGgnN4tajnCN93LbQ2k
        subject_person_id: p_YFd34MvThiv8hxr2dYFSzj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQa2MxSVx55ffHPQLbJDTw
          claim_id: c_a44kGgnN4tajnCN93LbQ2k
          source_id: s_moxC1PEqLCJZdqq5Go2jwc
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
        id: c_jM9769ZZ2PDULKXM4jfqdg
        subject_person_id: p_YFd34MvThiv8hxr2dYFSzj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王強（594年—678年），唐人物。籍贯太原，曾任上柱國。（中国历代人物传记资料库 CBDB 139715）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xnnq9pugPADhZlNSdOy276
          claim_id: c_jM9769ZZ2PDULKXM4jfqdg
          source_id: s_moxC1PEqLCJZdqq5Go2jwc
          stance: supports
          locator: CBDB:139715
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

# 王強

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王強 | accepted |
| birth.date | 594年 | accepted |
| death.date | 678年 | accepted |
| bio.summary | 王強（594年—678年），唐人物。籍贯太原，曾任上柱國。（中国历代人物传记资料库 CBDB 139715） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王強（CBDB 139715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139715&o=json)
