---
schema: wang-person/v1
id: p_x2hPZFJ1a7sByp4GiwD4A8
status: active
merged_into: null
display_name: 王徹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NEYxFzgGF27wjWVGh6YWxj
        subject_person_id: p_x2hPZFJ1a7sByp4GiwD4A8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1SB49c9LBHE8uzsNNkbCy8
          claim_id: c_NEYxFzgGF27wjWVGh6YWxj
          source_id: s_2d9jcB7sLp2hKiTu16ffym
          stance: supports
          locator: CBDB:157520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157520）
          source: &a1
            id: s_2d9jcB7sLp2hKiTu16ffym
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 157520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157520&o=json
            external_identifier: CBDB:157520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5q1DbWJ27JzU2C8rj63PAp
        subject_person_id: p_x2hPZFJ1a7sByp4GiwD4A8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徹，唐人物。籍贯樂安。（中国历代人物传记资料库 CBDB 157520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d_G_OSb88ksliaW0rSlZTL
          claim_id: c_5q1DbWJ27JzU2C8rj63PAp
          source_id: s_2d9jcB7sLp2hKiTu16ffym
          stance: supports
          locator: CBDB:157520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YzWWfep6jVZkAzvPVsiNzR
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x2hPZFJ1a7sByp4GiwD4A8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oE3prfO6CqW0PMw8bU1uDL
          claim_id: c_YzWWfep6jVZkAzvPVsiNzR
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45sVsGucdcRmogpRJoCZis
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王徹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徹 | accepted |
| bio.summary | 王徹，唐人物。籍贯樂安。（中国历代人物传记资料库 CBDB 157520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_45sVsGucdcRmogpRJoCZis | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徹（CBDB 157520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157520&o=json)
- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
