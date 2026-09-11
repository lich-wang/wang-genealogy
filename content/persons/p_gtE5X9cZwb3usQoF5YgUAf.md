---
schema: wang-person/v1
id: p_gtE5X9cZwb3usQoF5YgUAf
status: active
merged_into: null
display_name: 王楚玉
cbdb_id: 143771
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dey5Lmje5KvV7b98NbCXCw
        subject_person_id: p_gtE5X9cZwb3usQoF5YgUAf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚玉，唐人物。中国历代人物传记资料库（CBDB）以人物编号 143771 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_7LgINs9mKslGhOHQelSwZE
          claim_id: c_dey5Lmje5KvV7b98NbCXCw
          source_id: s_NiBi66BPvRteL1fN5VGLAn
          stance: supports
          locator: CBDB:143771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_NiBi66BPvRteL1fN5VGLAn
            source_type: api_record
            title: 中国历代人物传记资料库：王楚玉（CBDB 143771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143771&o=json
            external_identifier: CBDB:143771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PkwjC2Bc6VsLTUePLBJGfc
        subject_person_id: p_gtE5X9cZwb3usQoF5YgUAf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_romke9Ee2AgEiuBnCSUQkf
          claim_id: c_PkwjC2Bc6VsLTUePLBJGfc
          source_id: s_NiBi66BPvRteL1fN5VGLAn
          stance: supports
          locator: CBDB:143771
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_NiBi66BPvRteL1fN5VGLAn
            source_type: api_record
            title: 中国历代人物传记资料库：王楚玉（CBDB 143771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143771&o=json
            external_identifier: CBDB:143771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ejGEeGJXz7SZH88HzCJhsC
        subject_person_id: p_ARF3H1THkf22huEtSZNiYZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gtE5X9cZwb3usQoF5YgUAf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z7dlOSZSByiLgmvHDwHe1z
          claim_id: c_ejGEeGJXz7SZH88HzCJhsC
          source_id: s_vKMLN1VVS2SVij8s41qioW
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao112：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vKMLN1VVS2SVij8s41qioW
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 164998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164998&o=json
            external_identifier: CBDB:164998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ARF3H1THkf22huEtSZNiYZ
        status: active
        display_name: 王賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楚玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楚玉，唐人物。中国历代人物传记资料库（CBDB）以人物编号 143771 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王楚玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ARF3H1THkf22huEtSZNiYZ | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 164998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164998&o=json)
- [中国历代人物传记资料库：王楚玉（CBDB 143771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143771&o=json)
