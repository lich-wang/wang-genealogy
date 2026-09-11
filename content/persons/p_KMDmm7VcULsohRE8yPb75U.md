---
schema: wang-person/v1
id: p_KMDmm7VcULsohRE8yPb75U
status: active
merged_into: null
display_name: 王宗美
cbdb_id: 247518
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RTYrVc4Zpv7aTrdiuJ1JBm
        subject_person_id: p_KMDmm7VcULsohRE8yPb75U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗美，明人物。中国历代人物传记资料库（CBDB）以人物编号 247518 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_4rk8JqPU56r7eLUzER6ad-
          claim_id: c_RTYrVc4Zpv7aTrdiuJ1JBm
          source_id: s_L3Fej3dhK5qSpiVLjxjsvN
          stance: supports
          locator: CBDB:247518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_L3Fej3dhK5qSpiVLjxjsvN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗美（CBDB 247518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247518&o=json
            external_identifier: CBDB:247518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XGRAorJvQuibFHDwkEPtSk
        subject_person_id: p_KMDmm7VcULsohRE8yPb75U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BYwM5WvVE3pjh9J9MPuC4L
          claim_id: c_XGRAorJvQuibFHDwkEPtSk
          source_id: s_L3Fej3dhK5qSpiVLjxjsvN
          stance: supports
          locator: CBDB:247518
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_L3Fej3dhK5qSpiVLjxjsvN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗美（CBDB 247518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247518&o=json
            external_identifier: CBDB:247518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VpdRyHQBFWkkb5A0IeK4HA
        subject_person_id: p_KMDmm7VcULsohRE8yPb75U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_unANY-qNzAM8C78MNYuYbh
          claim_id: c_VpdRyHQBFWkkb5A0IeK4HA
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百六十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dTUXRMkxqmhmdy9hU3p8N8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 199633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json
            external_identifier: CBDB:199633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VUBpMzfYH8LCVFm8M3HgXc
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗美，明人物。中国历代人物传记资料库（CBDB）以人物编号 247518 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宗美 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VUBpMzfYH8LCVFm8M3HgXc | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗美（CBDB 247518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247518&o=json)
- [中国历代人物传记资料库：王佐（CBDB 199633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json)
