---
schema: wang-person/v1
id: p_NCWXMHUiC6tyK4PRKjtWra
status: active
merged_into: null
display_name: 王欽
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9sx7ErRBDy339T5x9eMLo
        subject_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EN2zJHyuy2Wt7eJ7NpK8D
          claim_id: c_R9sx7ErRBDy339T5x9eMLo
          source_id: s_6riVZTJQ4U5aTMyzEwKBf1
          stance: supports
          locator: CBDB:199878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199878）
          source: &a1
            id: s_6riVZTJQ4U5aTMyzEwKBf1
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 199878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199878&o=json
            external_identifier: CBDB:199878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rYWD3wb9RSUauWs7zFArw3
        subject_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1442年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hi7WwoNRW7V7Fxp9msBs4U
          claim_id: c_rYWD3wb9RSUauWs7zFArw3
          source_id: s_6riVZTJQ4U5aTMyzEwKBf1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rUZmB6BeVzMyHf1zbZ63vK
        subject_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽（生于1442年），明人物。明清進士進士，籍贯長洲，入仕進士。（中国历代人物传记资料库 CBDB 199878）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zmEmw9OKZbFg2FGWLOBraS
          claim_id: c_rUZmB6BeVzMyHf1zbZ63vK
          source_id: s_6riVZTJQ4U5aTMyzEwKBf1
          stance: supports
          locator: CBDB:199878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LkQZoI1HS_vnHGAj9eR1nd
        subject_person_id: p_BD17xmnVZy2b3FhFVaUggj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vXGXX4MhjvoMv5NLrWJ6FH
          claim_id: c_LkQZoI1HS_vnHGAj9eR1nd
          source_id: s_gUcic1d8YfSmF1f3LRdwgL
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gUcic1d8YfSmF1f3LRdwgL
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 250851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250851&o=json
            external_identifier: CBDB:250851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BD17xmnVZy2b3FhFVaUggj
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AHlB8jUnHbxFVk_2WvRQBb
        subject_person_id: p_E6K5e7Xk9yvQnbSUqCD5fD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hIAOeZBPn46kDQ05nJ_oHI
          claim_id: c_AHlB8jUnHbxFVk_2WvRQBb
          source_id: s_s4BZwH7EdFaBv2NjhmXXSk
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s4BZwH7EdFaBv2NjhmXXSk
            source_type: api_record
            title: 中国历代人物传记资料库：王景某（CBDB 250849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250849&o=json
            external_identifier: CBDB:250849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E6K5e7Xk9yvQnbSUqCD5fD
        status: active
        display_name: 王景某
        merged_into_person_id: null
    - claim:
        id: c_59224fH-oN45zrVD6xBRWO
        subject_person_id: p_bCoEvzpH1ND5RKw58aFdLW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IE-GdLESSn0pxE3WuAS2Z
          claim_id: c_59224fH-oN45zrVD6xBRWO
          source_id: s_ZpcnvHaM42upHz3A3hzkC7
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZpcnvHaM42upHz3A3hzkC7
            source_type: api_record
            title: 中国历代人物传记资料库：王璲良（CBDB 250850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250850&o=json
            external_identifier: CBDB:250850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bCoEvzpH1ND5RKw58aFdLW
        status: active
        display_name: 王璲良
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| birth.date | 1442年 | accepted |
| bio.summary | 王欽（生于1442年），明人物。明清進士進士，籍贯長洲，入仕進士。（中国历代人物传记资料库 CBDB 199878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BD17xmnVZy2b3FhFVaUggj | 王懋 | accepted |
| ancestors | p_E6K5e7Xk9yvQnbSUqCD5fD | 王景某 | accepted |
| ancestors | p_bCoEvzpH1ND5RKw58aFdLW | 王璲良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景某（CBDB 250849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250849&o=json)
- [中国历代人物传记资料库：王懋（CBDB 250851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250851&o=json)
- [中国历代人物传记资料库：王欽（CBDB 199878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199878&o=json)
- [中国历代人物传记资料库：王璲良（CBDB 250850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250850&o=json)
