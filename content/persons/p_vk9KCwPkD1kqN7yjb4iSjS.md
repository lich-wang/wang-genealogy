---
schema: wang-person/v1
id: p_vk9KCwPkD1kqN7yjb4iSjS
status: active
merged_into: null
display_name: 王君愕
revision: 1
cbdb_id: 162072
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gxoKzfv7E7w7zN1SQLUc-U
        subject_person_id: p_vk9KCwPkD1kqN7yjb4iSjS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君愕，史料所见人物。本项目依据《中国历代人物传记资料库：王君愕（CBDB 162072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DsW2QTBoHY4F4JG57-Fpds
          claim_id: c_gxoKzfv7E7w7zN1SQLUc-U
          source_id: s_G0SgXP7z2MgZt6xH5wgNg4
          stance: supports
          locator: CBDB:162072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_G0SgXP7z2MgZt6xH5wgNg4
            source_type: api_record
            title: 中国历代人物传记资料库：王君愕（CBDB 162072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162072&o=json
            external_identifier: CBDB:162072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GwhqsKWtqqVvGru2mI9YC-
        subject_person_id: p_vk9KCwPkD1kqN7yjb4iSjS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君愕
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__agxyp9zKbbDp8Ve7RhO8M
          claim_id: c_GwhqsKWtqqVvGru2mI9YC-
          source_id: s_G0SgXP7z2MgZt6xH5wgNg4
          stance: supports
          locator: CBDB:162072
          quotation: null
          interpretation_note: CBDB 明确记录的张廉穆配偶
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
        id: c_EEhK4WEWO6I16o2BZ2pOLU
        subject_person_id: p_Aa4p5dY4uQntdmkvhjUGzp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vk9KCwPkD1kqN7yjb4iSjS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O22h5FlkarPL_hss2HHoSO
          claim_id: c_EEhK4WEWO6I16o2BZ2pOLU
          source_id: s_G0SgXP7z2MgZt6xH5wgNg4
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui33：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Aa4p5dY4uQntdmkvhjUGzp
        status: active
        display_name: 张廉穆
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王君愕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君愕，史料所见人物。本项目依据《中国历代人物传记资料库：王君愕（CBDB 162072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王君愕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Aa4p5dY4uQntdmkvhjUGzp | 张廉穆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君愕（CBDB 162072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162072&o=json)
