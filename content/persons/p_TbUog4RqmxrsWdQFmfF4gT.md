---
schema: wang-person/v1
id: p_TbUog4RqmxrsWdQFmfF4gT
status: active
merged_into: null
display_name: 王大臨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsW8QUVDkRsfBK92s5GGx4
        subject_person_id: p_TbUog4RqmxrsWdQFmfF4gT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3jRyiNz3Ch36Rvsf6fDW7Y
          claim_id: c_gsW8QUVDkRsfBK92s5GGx4
          source_id: s_Z5HBjguEQeDUGBygCP3TKq
          stance: supports
          locator: CBDB:35589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35589）
          source: &a1
            id: s_Z5HBjguEQeDUGBygCP3TKq
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 35589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35589&o=json
            external_identifier: CBDB:35589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SfVCvKYZoNs71GWgsdrMK2
        subject_person_id: p_TbUog4RqmxrsWdQFmfF4gT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大臨，宋人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 35589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c9Q8xJk3q3nB1vVhLUXOEI
          claim_id: c_SfVCvKYZoNs71GWgsdrMK2
          source_id: s_Z5HBjguEQeDUGBygCP3TKq
          stance: supports
          locator: CBDB:35589
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__dBFUtb7HYXL0o4Ln-ClvV
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TbUog4RqmxrsWdQFmfF4gT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yul0V1lPVX8jN8i8O_DnKa
          claim_id: c__dBFUtb7HYXL0o4Ln-ClvV
          source_id: s_o6OYuuluCKGBIEe6NkWUAX
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3942）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_o6OYuuluCKGBIEe6NkWUAX
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 35589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35589&o=json
            external_identifier: CBDB:35589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zPJV9uPvg66nyW635J36Ep
        status: active
        display_name: 王中行
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大臨 | accepted |
| bio.summary | 王大臨，宋人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 35589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zPJV9uPvg66nyW635J36Ep | 王中行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 35589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35589&o=json)
