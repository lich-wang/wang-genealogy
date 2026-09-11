---
schema: wang-person/v1
id: p_sFdeor6e9emHx8yeGwqoiA
status: active
merged_into: null
display_name: 王芳壽
cbdb_id: 526655
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hLnA4wGG2jf9AnyM67dsQS
        subject_person_id: p_sFdeor6e9emHx8yeGwqoiA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳壽，清人物。中国历代人物传记资料库（CBDB）以人物编号 526655 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GCMscWr8QhE5kyZFsIkUM4
          claim_id: c_hLnA4wGG2jf9AnyM67dsQS
          source_id: s_rrjruENtJVx8aw1nfvkVWH
          stance: supports
          locator: CBDB:526655
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_rrjruENtJVx8aw1nfvkVWH
            source_type: api_record
            title: 中国历代人物传记资料库：王芳壽（CBDB 526655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526655&o=json
            external_identifier: CBDB:526655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjLvhAFrxRAfRTJWPjj7tf
        subject_person_id: p_sFdeor6e9emHx8yeGwqoiA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_asUcJcyYfHQLsW4hb9uzds
          claim_id: c_MjLvhAFrxRAfRTJWPjj7tf
          source_id: s_rrjruENtJVx8aw1nfvkVWH
          stance: supports
          locator: CBDB:526655
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_rrjruENtJVx8aw1nfvkVWH
            source_type: api_record
            title: 中国历代人物传记资料库：王芳壽（CBDB 526655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526655&o=json
            external_identifier: CBDB:526655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wNZltjSKs47nnSg2ijScpj
        subject_person_id: p_Fv23ugPr5g2KJUVuV4AwsS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sFdeor6e9emHx8yeGwqoiA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1VR_WnPOcXU_VnmRMrUpD
          claim_id: c_wNZltjSKs47nnSg2ijScpj
          source_id: s_PdLcp3D1kEA7o29KhtsDJw
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12736：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdLcp3D1kEA7o29KhtsDJw
            source_type: api_record
            title: 中国历代人物传记资料库：王一魁（CBDB 69040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69040&o=json
            external_identifier: CBDB:69040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fv23ugPr5g2KJUVuV4AwsS
        status: active
        display_name: 王一魁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王芳壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王芳壽，清人物。中国历代人物传记资料库（CBDB）以人物编号 526655 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王芳壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fv23ugPr5g2KJUVuV4AwsS | 王一魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳壽（CBDB 526655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526655&o=json)
- [中国历代人物传记资料库：王一魁（CBDB 69040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69040&o=json)
