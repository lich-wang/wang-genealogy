---
schema: wang-person/v1
id: p_A3oct87FbnEp6SgQ2qLz7K
status: active
merged_into: null
display_name: 王應昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4G2Dry7xYzk9gJpXMtNY4
        subject_person_id: p_A3oct87FbnEp6SgQ2qLz7K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xLPL4fq5uaA54rKhVfwSHp
          claim_id: c_N4G2Dry7xYzk9gJpXMtNY4
          source_id: s_C2T1JNSfJ9pELrtfop4BiL
          stance: supports
          locator: CBDB:235996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235996）
          source: &a1
            id: s_C2T1JNSfJ9pELrtfop4BiL
            source_type: api_record
            title: 中国历代人物传记资料库：王應昌（CBDB 235996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235996&o=json
            external_identifier: CBDB:235996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d2H9Q9txG6HNaG55FQArqD
        subject_person_id: p_A3oct87FbnEp6SgQ2qLz7K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應昌，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JaqF2QX98LRcLfs-vS_cBR
          claim_id: c_d2H9Q9txG6HNaG55FQArqD
          source_id: s_C2T1JNSfJ9pELrtfop4BiL
          stance: supports
          locator: CBDB:235996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x-niWZk_UspXGeJn-cuBx0
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3oct87FbnEp6SgQ2qLz7K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u70dnoo9U7YWfeUwHepX6x
          claim_id: c_x-niWZk_UspXGeJn-cuBx0
          source_id: s_C2T1JNSfJ9pELrtfop4BiL
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應昌 | accepted |
| bio.summary | 王應昌，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應昌（CBDB 235996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235996&o=json)
