---
schema: wang-person/v1
id: p_usDVSVNMMLPKsMgjFH23fr
status: active
merged_into: null
display_name: 王理
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bEteL7MuwfY4poEwKvGfJ5
        subject_person_id: p_usDVSVNMMLPKsMgjFH23fr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fJbv3SQaZK42rnAHq6UNo7
          claim_id: c_bEteL7MuwfY4poEwKvGfJ5
          source_id: s_rVQ7qkQAi1fs4aZ8v5TBoU
          stance: supports
          locator: CBDB:147264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147264）
          source: &a1
            id: s_rVQ7qkQAi1fs4aZ8v5TBoU
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 147264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147264&o=json
            external_identifier: CBDB:147264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aaCgWZdPxbGnvwz2JWaoYF
        subject_person_id: p_usDVSVNMMLPKsMgjFH23fr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，南北朝人物。籍贯北市，曾任秘書監、侍郎、州刺史。（中国历代人物传记资料库 CBDB 147264）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VXF1k2G93OQDbmC2c_mlyI
          claim_id: c_aaCgWZdPxbGnvwz2JWaoYF
          source_id: s_rVQ7qkQAi1fs4aZ8v5TBoU
          stance: supports
          locator: CBDB:147264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LKwr48l7Dj1r0tp4SUs2Ji
        subject_person_id: p_usDVSVNMMLPKsMgjFH23fr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5XZTGp3A73cVnQtTBjVpP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hw3WlzqL-95atsBZckh6Dh
          claim_id: c_LKwr48l7Dj1r0tp4SUs2Ji
          source_id: s_6jJLMtLSb4tXGkEeUMvKMT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 142：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6jJLMtLSb4tXGkEeUMvKMT
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 139060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139060&o=json
            external_identifier: CBDB:139060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G5XZTGp3A73cVnQtTBjVpP
        status: active
        display_name: 王惠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，南北朝人物。籍贯北市，曾任秘書監、侍郎、州刺史。（中国历代人物传记资料库 CBDB 147264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G5XZTGp3A73cVnQtTBjVpP | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 139060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139060&o=json)
- [中国历代人物传记资料库：王理（CBDB 147264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147264&o=json)
