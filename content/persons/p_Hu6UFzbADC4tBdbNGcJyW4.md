---
schema: wang-person/v1
id: p_Hu6UFzbADC4tBdbNGcJyW4
status: active
merged_into: null
display_name: 王翁慶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCxJVYcbVW7trPNY31GXzb
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTJk3o5Jezni3ZFPFwhAej
          claim_id: c_iCxJVYcbVW7trPNY31GXzb
          source_id: s_Y78gmcoYLvCCMfNB2AXtwh
          stance: supports
          locator: CBDB:175755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175755）
          source: &a1
            id: s_Y78gmcoYLvCCMfNB2AXtwh
            source_type: api_record
            title: 中国历代人物传记资料库：王翁慶（CBDB 175755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175755&o=json
            external_identifier: CBDB:175755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sGG8gdADucrq7LY8Eqmuh3
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVeyDNnDhuWLmZyf1Yn7df
          claim_id: c_sGG8gdADucrq7LY8Eqmuh3
          source_id: s_Y78gmcoYLvCCMfNB2AXtwh
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
        id: c_zUNdTXGKfQSqmBGZH2EHAF
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zM6Cdscob3Q97w6GWRridk
          claim_id: c_zUNdTXGKfQSqmBGZH2EHAF
          source_id: s_Y78gmcoYLvCCMfNB2AXtwh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o3UIm_Cu3rCVmGd43uTp8E
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YG8IIcNWmGRWdqIrJstHnB
          claim_id: c_o3UIm_Cu3rCVmGd43uTp8E
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Lz1aJbKkYc62PVeN7aXUjx
            source_type: api_record
            title: 中国历代人物传记资料库：王同人（CBDB 175747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json
            external_identifier: CBDB:175747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d3rRMY3j92nB8V1GyfMiLc
        status: active
        display_name: 王同人
        merged_into_person_id: null
  children:
    - claim:
        id: c_5WxG7A3HA9Jr3h6Vzcz9u-
        subject_person_id: p_Hu6UFzbADC4tBdbNGcJyW4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pt746-wqPzJ0UHQXGRqLBE
          claim_id: c_5WxG7A3HA9Jr3h6Vzcz9u-
          source_id: s_SyB5HGjSVhCMX3rywmiE46
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SyB5HGjSVhCMX3rywmiE46
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 175756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175756&o=json
            external_identifier: CBDB:175756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8jb38Wu9u5AatYJn3UaMsM
        status: active
        display_name: 王日新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翁慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翁慶 | accepted |
| death.date | 699年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d3rRMY3j92nB8V1GyfMiLc | 王同人 | accepted |
| children | p_8jb38Wu9u5AatYJn3UaMsM | 王日新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 175756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175756&o=json)
- [中国历代人物传记资料库：王同人（CBDB 175747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json)
- [中国历代人物传记资料库：王翁慶（CBDB 175755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175755&o=json)
