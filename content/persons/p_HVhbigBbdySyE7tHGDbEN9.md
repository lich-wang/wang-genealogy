---
schema: wang-person/v1
id: p_HVhbigBbdySyE7tHGDbEN9
status: active
merged_into: null
display_name: 苟氏
revision: 1
cbdb_id: 573436
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_srtfNVF7UpkyBmTfV5-YrP
        subject_person_id: p_HVhbigBbdySyE7tHGDbEN9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 苟氏，史料所见人物。本项目依据《中国历代人物传记资料库：苟氏(王安妻)（CBDB 573436）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bRVt418QPNNDlMZ2yBB2h
          claim_id: c_srtfNVF7UpkyBmTfV5-YrP
          source_id: s_v9kHx2xFIWYrEWomOp1RaO
          stance: supports
          locator: CBDB:573436
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_v9kHx2xFIWYrEWomOp1RaO
            source_type: api_record
            title: 中国历代人物传记资料库：苟氏(王安妻)（CBDB 573436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573436&o=json
            external_identifier: CBDB:573436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SdRkrC2zkURHo-WNKIatvn
        subject_person_id: p_HVhbigBbdySyE7tHGDbEN9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 苟氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rGstJB8iuZ55YPjY3gr19o
          claim_id: c_SdRkrC2zkURHo-WNKIatvn
          source_id: s_v9kHx2xFIWYrEWomOp1RaO
          stance: supports
          locator: CBDB:573436
          quotation: null
          interpretation_note: CBDB 明确记录的王安配偶
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
        id: c_KmeIEoAUv0mn8dEMPx-b6A
        subject_person_id: p_dMA1nwQeFTeJRp3X2vCesa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HVhbigBbdySyE7tHGDbEN9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VzuTD-g9XF1YISYaznZbN2
          claim_id: c_KmeIEoAUv0mn8dEMPx-b6A
          source_id: s_v9kHx2xFIWYrEWomOp1RaO
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，10：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dMA1nwQeFTeJRp3X2vCesa
        status: active
        display_name: 王安
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 苟氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 苟氏，史料所见人物。本项目依据《中国历代人物传记资料库：苟氏(王安妻)（CBDB 573436）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 苟氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dMA1nwQeFTeJRp3X2vCesa | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：苟氏(王安妻)（CBDB 573436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573436&o=json)
