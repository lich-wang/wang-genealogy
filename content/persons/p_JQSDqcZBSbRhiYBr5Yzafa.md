---
schema: wang-person/v1
id: p_JQSDqcZBSbRhiYBr5Yzafa
status: active
merged_into: null
display_name: 王純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gSZWBvHhFFjv23mFox1cS3
        subject_person_id: p_JQSDqcZBSbRhiYBr5Yzafa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3DwupM7hB6Jo974h6GzwjM
          claim_id: c_gSZWBvHhFFjv23mFox1cS3
          source_id: s_vWpnF4PQzQ9P6dDLMz5LYk
          stance: supports
          locator: CBDB:280451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280451）
          source: &a1
            id: s_vWpnF4PQzQ9P6dDLMz5LYk
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 280451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280451&o=json
            external_identifier: CBDB:280451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CsHwe86FKR78sAwpPA1aMD
        subject_person_id: p_JQSDqcZBSbRhiYBr5Yzafa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，明人物。正德十二年進士，籍贯慈溪，曾任都察院左僉都御史。（中国历代人物传记资料库 CBDB 280451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DJOVa_-D3Ot8rwlqXNmwRr
          claim_id: c_CsHwe86FKR78sAwpPA1aMD
          source_id: s_vWpnF4PQzQ9P6dDLMz5LYk
          stance: supports
          locator: CBDB:280451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p6vuoLx6GpuTLrIBptPMuH
        subject_person_id: p_JQSDqcZBSbRhiYBr5Yzafa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GPJWbNZBxqcAyFkJPjejib
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KmmkNRAc6rQzhOJEuSKlk6
          claim_id: c_p6vuoLx6GpuTLrIBptPMuH
          source_id: s_s1WWgNzGTLDo9xbGU15aCa
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s1WWgNzGTLDo9xbGU15aCa
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 201918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201918&o=json
            external_identifier: CBDB:201918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GPJWbNZBxqcAyFkJPjejib
        status: active
        display_name: 王鎔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，明人物。正德十二年進士，籍贯慈溪，曾任都察院左僉都御史。（中国历代人物传记资料库 CBDB 280451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GPJWbNZBxqcAyFkJPjejib | 王鎔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 280451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280451&o=json)
- [中国历代人物传记资料库：王鎔（CBDB 201918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201918&o=json)
