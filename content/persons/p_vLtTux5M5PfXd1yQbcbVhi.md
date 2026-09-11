---
schema: wang-person/v1
id: p_vLtTux5M5PfXd1yQbcbVhi
status: active
merged_into: null
display_name: 王諏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mBVaAAzjVVGUGE4R1Jsz8u
        subject_person_id: p_vLtTux5M5PfXd1yQbcbVhi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HapHvQ8Lys5UC4PKt97b2z
          claim_id: c_mBVaAAzjVVGUGE4R1Jsz8u
          source_id: s_H75HwKkwLCyRKH5i9sKatq
          stance: supports
          locator: CBDB:233808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233808）
          source: &a1
            id: s_H75HwKkwLCyRKH5i9sKatq
            source_type: api_record
            title: 中国历代人物传记资料库：王諏（CBDB 233808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233808&o=json
            external_identifier: CBDB:233808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L9e29AgxmeZaXdkg89JwXb
        subject_person_id: p_vLtTux5M5PfXd1yQbcbVhi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諏，明人物。籍贯南充。（中国历代人物传记资料库 CBDB 233808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t22BwtY6olc32vOKNXmW7D
          claim_id: c_L9e29AgxmeZaXdkg89JwXb
          source_id: s_H75HwKkwLCyRKH5i9sKatq
          stance: supports
          locator: CBDB:233808
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y6BD7D4u41lMsxshsPtp6p
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vLtTux5M5PfXd1yQbcbVhi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FwR-5EoHFp4vMrjncwspoo
          claim_id: c_y6BD7D4u41lMsxshsPtp6p
          source_id: s_H75HwKkwLCyRKH5i9sKatq
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諏 | accepted |
| bio.summary | 王諏，明人物。籍贯南充。（中国历代人物传记资料库 CBDB 233808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諏（CBDB 233808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233808&o=json)
