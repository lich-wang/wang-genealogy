---
schema: wang-person/v1
id: p_w4MHWq4SLDd2E25YKf5HFB
status: active
merged_into: null
display_name: 唐慧儀
revision: 1
cbdb_id: 70371
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eeDCSXcgDivp4CFq3IqFj8
        subject_person_id: p_w4MHWq4SLDd2E25YKf5HFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐慧儀
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zpw5aH02d-eILlyVjSu6sY
          claim_id: c_eeDCSXcgDivp4CFq3IqFj8
          source_id: s_FRUThp9x9TI83KugzsE5zU
          stance: supports
          locator: CBDB:70371
          quotation: null
          interpretation_note: CBDB 明确记录的王鼇配偶
          source: &a1
            id: s_FRUThp9x9TI83KugzsE5zU
            source_type: api_record
            title: 中国历代人物传记资料库：唐慧儀（CBDB 70371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70371&o=json
            external_identifier: CBDB:70371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zqgdgo9NAWWjX4onb_iTT-
        subject_person_id: p_7PXnWdZKq9QGpBPC6jGENU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_w4MHWq4SLDd2E25YKf5HFB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfMaeH9Qw_TvHd26NW_21Y
          claim_id: c_zqgdgo9NAWWjX4onb_iTT-
          source_id: s_FRUThp9x9TI83KugzsE5zU
          stance: supports
          locator: CBDB 双向互证（妻子 唐慧儀）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7PXnWdZKq9QGpBPC6jGENU
        status: active
        display_name: 王鼇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 唐慧儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 唐慧儀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7PXnWdZKq9QGpBPC6jGENU | 王鼇 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐慧儀（CBDB 70371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70371&o=json)
