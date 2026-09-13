---
schema: wang-person/v1
id: p_CF5LJP7gMSDjjxZDLTJKd5
status: active
merged_into: null
display_name: 王濟
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ppKHjtFvFcqDv3xfbNz3sU
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bA1HaV5KvsNFHz5N4K1xEk
          claim_id: c_ppKHjtFvFcqDv3xfbNz3sU
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB:34667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34667）
          source: &a1
            id: s_8MUgv6sNQt8ThP4q5TJstL
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 34667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json
            external_identifier: CBDB:34667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyJEnUN48sj5V1KHF14E48
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 34667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qiAxjI20ugUMQAVdZmhE4T
          claim_id: c_RyJEnUN48sj5V1KHF14E48
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB:34667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YDobhEkkZgVj3ruKmyChBN
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TapicYKnDacnd619uoEVqd
          claim_id: c_YDobhEkkZgVj3ruKmyChBN
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PGZtNCp6fX43UKKVunQyUd
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children:
    - claim:
        id: c_q77rACv3cwzYgfv64buhwJ
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Op6PToK09XMWs0pL-vjxCb
          claim_id: c_q77rACv3cwzYgfv64buhwJ
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB 双向互证（子 王廷陳 ⇄ 父 王濟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qLcC4SmUNJ1rkkQyeeqtKk
        status: active
        display_name: 王廷陳
        merged_into_person_id: null
    - claim:
        id: c__hi5qZMsYW9xquWMRLaCBS
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6MvFQM8BvtkC6qZZj9523
          claim_id: c__hi5qZMsYW9xquWMRLaCBS
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB 双向互证（子 王廷瞻 ⇄ 父 王濟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_yJdXEyhNkYGEWdnouNB9Xu
        status: active
        display_name: 王廷瞻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yh8-Tj5LfYJj-74pVyA9qR
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CGgacbGZFCBxdmoDnHfJ5t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3XbiXewH6Q9cgGIrCaYuXI
          claim_id: c_yh8-Tj5LfYJj-74pVyA9qR
          source_id: s_BVpjvZZIje8W7EH_PL7O3M
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BVpjvZZIje8W7EH_PL7O3M
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王濟妻)（CBDB 270231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270231&o=json
            external_identifier: CBDB:270231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CGgacbGZFCBxdmoDnHfJ5t
        status: active
        display_name: 汪氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_cCMwg2vNfsFXh6vHW7mZhX
        subject_person_id: p_uadUiUdJs2HHpEDqfmU928
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ab7KMqeHTCdZmDXEymNkiu
          claim_id: c_cCMwg2vNfsFXh6vHW7mZhX
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uadUiUdJs2HHpEDqfmU928
        status: active
        display_name: 王仲斌
        merged_into_person_id: null
    - claim:
        id: c_fiRs4LUfSdrKGF3SmLNOYP
        subject_person_id: p_MtM5ZgKmZYVFMBTAMHqT8e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ca1b5GNv21kmzkeWzCbOUW
          claim_id: c_fiRs4LUfSdrKGF3SmLNOYP
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MtM5ZgKmZYVFMBTAMHqT8e
        status: active
        display_name: 王思旻
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 34667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PGZtNCp6fX43UKKVunQyUd | 王文奎 | accepted |
| children | p_qLcC4SmUNJ1rkkQyeeqtKk | 王廷陳 | accepted |
| children | p_yJdXEyhNkYGEWdnouNB9Xu | 王廷瞻 | accepted |
| spouses | p_CGgacbGZFCBxdmoDnHfJ5t | 汪氏 | accepted |
| ancestors | p_uadUiUdJs2HHpEDqfmU928 | 王仲斌 | accepted |
| ancestors | p_MtM5ZgKmZYVFMBTAMHqT8e | 王思旻 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王濟妻)（CBDB 270231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270231&o=json)
- [中国历代人物传记资料库：王濟（CBDB 34667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json)
