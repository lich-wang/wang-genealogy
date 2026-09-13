---
schema: wang-person/v1
id: p_DTYKLNhucep7enqQCPhSbQ
status: active
merged_into: null
display_name: 王安武
cbdb_id: 250567
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKN9p9NMpLg1YNiQwed4yL
        subject_person_id: p_DTYKLNhucep7enqQCPhSbQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安武，史料所见人物。本项目依据《中国历代人物传记资料库：王安武（CBDB 250567）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_i5fUYkxGSDqpgAWlayINvw
          claim_id: c_MKN9p9NMpLg1YNiQwed4yL
          source_id: s_zQQjkLJNGt1Y11r6nJrtXg
          stance: supports
          locator: CBDB:250567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zQQjkLJNGt1Y11r6nJrtXg
            source_type: api_record
            title: 中国历代人物传记资料库：王安武（CBDB 250567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250567&o=json
            external_identifier: CBDB:250567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lnr9uZGp1fVzrzH34NVTKa
        subject_person_id: p_DTYKLNhucep7enqQCPhSbQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ba58rRd1HgzEZvD64Qpn3h
          claim_id: c_Lnr9uZGp1fVzrzH34NVTKa
          source_id: s_zQQjkLJNGt1Y11r6nJrtXg
          stance: supports
          locator: CBDB:250567
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_HM4viCxUP248uvCVFrsk2w
        subject_person_id: p_DTYKLNhucep7enqQCPhSbQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qhQ3nTBXlKg6-6ywltqkhx
          claim_id: c_HM4viCxUP248uvCVFrsk2w
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZFRacVdsrHF9g9mvSJ3aS2
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 338703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json
            external_identifier: CBDB:338703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GGm15a95bmjM4yFUpB9QGR
        status: active
        display_name: 王儼
        merged_into_person_id: null
  other: []
---

# 王安武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安武，史料所见人物。本项目依据《中国历代人物传记资料库：王安武（CBDB 250567）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王安武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GGm15a95bmjM4yFUpB9QGR | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安武（CBDB 250567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250567&o=json)
- [中国历代人物传记资料库：王儼（CBDB 338703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json)
