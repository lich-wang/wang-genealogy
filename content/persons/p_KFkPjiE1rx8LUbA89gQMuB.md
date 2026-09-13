---
schema: wang-person/v1
id: p_KFkPjiE1rx8LUbA89gQMuB
status: active
merged_into: null
display_name: 王世雄
cbdb_id: 17755
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sCXmajCzgh8ruTC3g6JnKC
        subject_person_id: p_KFkPjiE1rx8LUbA89gQMuB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世雄，宋人物。籍贯洛陽，曾任尚書左右丞。（中国历代人物传记资料库 CBDB 17755）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_8DNZkZMX5jF2HYAnbqiXyf
          claim_id: c_sCXmajCzgh8ruTC3g6JnKC
          source_id: s_Dxgfx8QZY4DLoNPf3g4JRd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_Dxgfx8QZY4DLoNPf3g4JRd
            source_type: api_record
            title: 维基数据：王世雄（Q45387123）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387123
            external_identifier: Q45387123
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
        - id: cs_cZpeQi_7j3OwlEeIK0ryC0
          claim_id: c_sCXmajCzgh8ruTC3g6JnKC
          source_id: s_roF5BhafqDcpJwd21x6CX9
          stance: supports
          locator: CBDB:17755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_roF5BhafqDcpJwd21x6CX9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世雄（17755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17755&o=json
            external_identifier: CBDB:17755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:56.191Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mbhNtwKM231n8CNWRSuXPW
        subject_person_id: p_KFkPjiE1rx8LUbA89gQMuB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世雄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_82NUik66knHGKHRopLBXyM
          claim_id: c_mbhNtwKM231n8CNWRSuXPW
          source_id: s_roF5BhafqDcpJwd21x6CX9
          stance: supports
          locator: Q45387123
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_HVSwkQiP52g1EAeC1YgWuq
          claim_id: c_mbhNtwKM231n8CNWRSuXPW
          source_id: s_Dxgfx8QZY4DLoNPf3g4JRd
          stance: supports
          locator: Q45387123
          quotation: null
          interpretation_note: null
          source:
            id: s_Dxgfx8QZY4DLoNPf3g4JRd
            source_type: api_record
            title: 维基数据：王世雄（Q45387123）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387123
            external_identifier: Q45387123
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XkKpWMZJqjkuZkdVeCfh8F
        subject_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KFkPjiE1rx8LUbA89gQMuB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QSZmwSYj4C6Ftq7JjUR94C
          claim_id: c_XkKpWMZJqjkuZkdVeCfh8F
          source_id: s_5h3ogmep1VLLiYxHP9RUqR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5h3ogmep1VLLiYxHP9RUqR
            source_type: api_record
            title: 维基数据：王承衍（Q28415659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28415659
            external_identifier: Q28415659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E8%A1%8D
        - id: cs_Xg68BA9QHRGdhJNGsuaFsz
          claim_id: c_XkKpWMZJqjkuZkdVeCfh8F
          source_id: s_Dxgfx8QZY4DLoNPf3g4JRd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_AUfdAdfabARPGpTnVE78mZ
          claim_id: c_XkKpWMZJqjkuZkdVeCfh8F
          source_id: s_c7NdGSVJDpv8cCcn7qJgcN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_c7NdGSVJDpv8cCcn7qJgcN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承衍（3939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3939&o=json
            external_identifier: CBDB:3939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:56.527Z
            metadata_json: null
      object_person:
        id: p_6MGDJDsMfhoCMpi8TCXnFR
        status: active
        display_name: 王承衍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世雄，宋人物。籍贯洛陽，曾任尚書左右丞。（中国历代人物传记资料库 CBDB 17755） | accepted |
| name.primary | 王世雄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |

## 外部来源

- [维基数据：王承衍（Q28415659）](https://www.wikidata.org/wiki/Q28415659)
- [维基数据：王世雄（Q45387123）](https://www.wikidata.org/wiki/Q45387123)
- [CBDB 中国历代人物传记资料库：王承衍（3939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3939&o=json)
- [CBDB 中国历代人物传记资料库：王世雄（17755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17755&o=json)
