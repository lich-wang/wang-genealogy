---
schema: wang-person/v1
id: p_i2nBrys5iWYgX5hACqriPR
status: active
merged_into: null
display_name: 王愛子
cbdb_id: 148017
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1LbJ8rQ4UtogB9EkJ6AZiC
        subject_person_id: p_i2nBrys5iWYgX5hACqriPR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛子，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148017 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Hw6TYSM1sAlykWSrECg1ke
          claim_id: c_1LbJ8rQ4UtogB9EkJ6AZiC
          source_id: s_4v4jBiP3xzewcqzbpz2uAC
          stance: supports
          locator: CBDB:148017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4v4jBiP3xzewcqzbpz2uAC
            source_type: api_record
            title: 中国历代人物传记资料库：王愛子（CBDB 148017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148017&o=json
            external_identifier: CBDB:148017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LN3GUw2gvsGYt6XkKHGmU6
        subject_person_id: p_i2nBrys5iWYgX5hACqriPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛子
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G7b3nYvxCHYv7rUS1Z3iqf
          claim_id: c_LN3GUw2gvsGYt6XkKHGmU6
          source_id: s_4v4jBiP3xzewcqzbpz2uAC
          stance: supports
          locator: CBDB:148017
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_4v4jBiP3xzewcqzbpz2uAC
            source_type: api_record
            title: 中国历代人物传记资料库：王愛子（CBDB 148017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148017&o=json
            external_identifier: CBDB:148017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FzyUwLdakaQPzRX4iktsEX
        subject_person_id: p_rnfWFPFGnS61ABkf4CVBNN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i2nBrys5iWYgX5hACqriPR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eq58dlMopYq4QBMspGN_wS
          claim_id: c_FzyUwLdakaQPzRX4iktsEX
          source_id: s_4v4jBiP3xzewcqzbpz2uAC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rnfWFPFGnS61ABkf4CVBNN
        status: active
        display_name: 王君
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愛子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愛子，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148017 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王愛子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rnfWFPFGnS61ABkf4CVBNN | 王君 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛子（CBDB 148017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148017&o=json)
