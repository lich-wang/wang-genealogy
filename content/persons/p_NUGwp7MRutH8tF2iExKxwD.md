---
schema: wang-person/v1
id: p_NUGwp7MRutH8tF2iExKxwD
status: active
merged_into: null
display_name: 王溢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CJYRSp6HiWxhppRiKpVpt5
        subject_person_id: p_NUGwp7MRutH8tF2iExKxwD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_66vyGdUT3ee9anC793Nmx6
          claim_id: c_CJYRSp6HiWxhppRiKpVpt5
          source_id: s_nUss5GJ9hKVMpjKE9RTkm5
          stance: supports
          locator: CBDB:253007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253007）
          source: &a1
            id: s_nUss5GJ9hKVMpjKE9RTkm5
            source_type: api_record
            title: 中国历代人物传记资料库：王溢（CBDB 253007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253007&o=json
            external_identifier: CBDB:253007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eJi6eKEjcGX8jKKBXaGhW5
        subject_person_id: p_NUGwp7MRutH8tF2iExKxwD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溢，明人物。成化十四年進士，曾任右通政。（中国历代人物传记资料库 CBDB 253007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aUalBZidY9ucY7rPHdpse0
          claim_id: c_eJi6eKEjcGX8jKKBXaGhW5
          source_id: s_nUss5GJ9hKVMpjKE9RTkm5
          stance: supports
          locator: CBDB:253007
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Fu4MQtUwLNGf03RihnxBap
        subject_person_id: p_NUGwp7MRutH8tF2iExKxwD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzGLWl4gnVTf3LEym5Oq_O
          claim_id: c_Fu4MQtUwLNGf03RihnxBap
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NXxFJQ5QppEL8W3nndMu23
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 200038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json
            external_identifier: CBDB:200038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eMDP1q9C4pkhGjAYDKDRYY
        status: active
        display_name: 王相
        merged_into_person_id: null
  other: []
---

# 王溢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溢 | accepted |
| bio.summary | 王溢，明人物。成化十四年進士，曾任右通政。（中国历代人物传记资料库 CBDB 253007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eMDP1q9C4pkhGjAYDKDRYY | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 200038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json)
- [中国历代人物传记资料库：王溢（CBDB 253007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253007&o=json)
