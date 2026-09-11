---
schema: wang-person/v1
id: p_Xcyh7tamvPSZtQ361fFGXR
status: active
merged_into: null
display_name: 王順恩
cbdb_id: 526899
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mkkVTMiEYuHJMbjeJWmgAD
        subject_person_id: p_Xcyh7tamvPSZtQ361fFGXR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順恩，清人物。中国历代人物传记资料库（CBDB）以人物编号 526899 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_F4YeeuEQ2S9ao85dccrrjV
          claim_id: c_mkkVTMiEYuHJMbjeJWmgAD
          source_id: s_FWvFL2yohNXPfEzJNv7WUZ
          stance: supports
          locator: CBDB:526899
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_FWvFL2yohNXPfEzJNv7WUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王順恩（CBDB 526899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526899&o=json
            external_identifier: CBDB:526899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QVXHkyPhUff7dK3hRvGkkx
        subject_person_id: p_Xcyh7tamvPSZtQ361fFGXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HTFTfmvBBkN5w811yEysMX
          claim_id: c_QVXHkyPhUff7dK3hRvGkkx
          source_id: s_FWvFL2yohNXPfEzJNv7WUZ
          stance: supports
          locator: CBDB:526899
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_FWvFL2yohNXPfEzJNv7WUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王順恩（CBDB 526899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526899&o=json
            external_identifier: CBDB:526899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5hzIK2-7OtiU47ufW-KNEc
        subject_person_id: p_vvBn8UmXb7DGZCHFctxsUR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xcyh7tamvPSZtQ361fFGXR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iGAzxoDfUI5TsSrcLK0W6O
          claim_id: c_5hzIK2-7OtiU47ufW-KNEc
          source_id: s_inFP6C1e3hjzmy86A5QHRa
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13076：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_inFP6C1e3hjzmy86A5QHRa
            source_type: api_record
            title: 中国历代人物传记资料库：王滇（CBDB 69371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69371&o=json
            external_identifier: CBDB:69371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vvBn8UmXb7DGZCHFctxsUR
        status: active
        display_name: 王滇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王順恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王順恩，清人物。中国历代人物传记资料库（CBDB）以人物编号 526899 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王順恩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vvBn8UmXb7DGZCHFctxsUR | 王滇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滇（CBDB 69371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69371&o=json)
- [中国历代人物传记资料库：王順恩（CBDB 526899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526899&o=json)
