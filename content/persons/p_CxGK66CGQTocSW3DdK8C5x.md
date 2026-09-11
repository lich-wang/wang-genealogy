---
schema: wang-person/v1
id: p_CxGK66CGQTocSW3DdK8C5x
status: active
merged_into: null
display_name: 王承仅
cbdb_id: 17753
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jno3HzN7C8MyCajSy61JuK
        subject_person_id: p_CxGK66CGQTocSW3DdK8C5x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承仅，宋人物。CBDB 记录其籍贯记录为海北州，身份包括武將，曾任左神武軍將軍。中国历代人物传记资料库（CBDB）以人物编号 17753 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TzmrVe8EzSGDsnvs1F8YNs
          claim_id: c_Jno3HzN7C8MyCajSy61JuK
          source_id: s_j2g7BkiFE414S8yYfiQjPR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_j2g7BkiFE414S8yYfiQjPR
            source_type: api_record
            title: 维基数据：王承仅（Q45387119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387119
            external_identifier: Q45387119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_Y8ES-1hUNmLSUXFZVpWqPr
          claim_id: c_Jno3HzN7C8MyCajSy61JuK
          source_id: s_Cvz8jFpDP2dwhey1qUCu4p
          stance: supports
          locator: CBDB:17753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cvz8jFpDP2dwhey1qUCu4p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承僅（17753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17753&o=json
            external_identifier: CBDB:17753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:03.325Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KttZQ9iAdMB67wEtg32Dsq
        subject_person_id: p_CxGK66CGQTocSW3DdK8C5x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承仅
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PyFQFz5ZEdsb2J42gAJPhB
          claim_id: c_KttZQ9iAdMB67wEtg32Dsq
          source_id: s_j2g7BkiFE414S8yYfiQjPR
          stance: supports
          locator: Q45387119
          quotation: null
          interpretation_note: null
          source:
            id: s_j2g7BkiFE414S8yYfiQjPR
            source_type: api_record
            title: 维基数据：王承仅（Q45387119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387119
            external_identifier: Q45387119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_jwoEAUU6vRcLaL14PB3KU9
          claim_id: c_KttZQ9iAdMB67wEtg32Dsq
          source_id: s_Cvz8jFpDP2dwhey1qUCu4p
          stance: supports
          locator: Q45387119
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K5VXU5kZEjG5UQQZQnEv3N
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CxGK66CGQTocSW3DdK8C5x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_61qGDfGYJzVCaFhM99Sm89
          claim_id: c_K5VXU5kZEjG5UQQZQnEv3N
          source_id: s_j2g7BkiFE414S8yYfiQjPR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_j2g7BkiFE414S8yYfiQjPR
            source_type: api_record
            title: 维基数据：王承仅（Q45387119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387119
            external_identifier: Q45387119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_APLauL1b1yfRvCiAKkxKZb
          claim_id: c_K5VXU5kZEjG5UQQZQnEv3N
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_xENpuVFCdYJGng5v6VfekN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王審琦（3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:41.447Z
            metadata_json: null
        - id: cs_f4JyPGh2LPjbM6FNws4JmG
          claim_id: c_K5VXU5kZEjG5UQQZQnEv3N
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DD7i8QKPn7xPVwKmB24Dfi
            source_type: api_record
            title: 维基数据：王审琦（Q15940340）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940340
            external_identifier: Q15940340
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_jhAXJEb1U9Ldt73n9uUeLS
        status: active
        display_name: 王审琦
        merged_into_person_id: null
    - claim:
        id: c_Oh7EPPuvuOKtDEapO5vhNd
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxGK66CGQTocSW3DdK8C5x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IyZzmPLTJsoyzgXpwQqDrC
          claim_id: c_Oh7EPPuvuOKtDEapO5vhNd
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1713：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kXDqY3oX1V5PnHzqot3UVv
            source_type: api_record
            title: 中国历代人物传记资料库：王審琦（CBDB 3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3FwfmVLuawARCoZyhyo5mg
        status: active
        display_name: 王審琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承仅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承仅，宋人物。CBDB 记录其籍贯记录为海北州，身份包括武將，曾任左神武軍將軍。中国历代人物传记资料库（CBDB）以人物编号 17753 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王承仅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhAXJEb1U9Ldt73n9uUeLS | 王审琦 | accepted |
| parents | p_3FwfmVLuawARCoZyhyo5mg | 王審琦 | accepted |

## 外部来源

- [维基数据：王承仅（Q45387119）](https://www.wikidata.org/wiki/Q45387119)
- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [中国历代人物传记资料库：王審琦（CBDB 3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
- [CBDB 中国历代人物传记资料库：王承僅（17753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17753&o=json)
