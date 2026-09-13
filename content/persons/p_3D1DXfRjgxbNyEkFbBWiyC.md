---
schema: wang-person/v1
id: p_3D1DXfRjgxbNyEkFbBWiyC
status: active
merged_into: null
display_name: 王知节
cbdb_id: 32171
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbL4fwYNEqratia8juZbVa
        subject_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知节，唐人物。籍贯祁縣，曾任州司馬。（中国历代人物传记资料库 CBDB 32171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_NDPG8FshPo1nfSCuaQz8ZL
          claim_id: c_DbL4fwYNEqratia8juZbVa
          source_id: s_SGeUn7oQG4uicqAJGWJA5A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SGeUn7oQG4uicqAJGWJA5A
            source_type: api_record
            title: 维基数据：王知节（Q45421025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421025
            external_identifier: Q45421025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_a0_72hfCjjNcY4hZorEW7F
          claim_id: c_DbL4fwYNEqratia8juZbVa
          source_id: s_v7Zos8fpr7t7VPidHANY8z
          stance: supports
          locator: CBDB:32171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_v7Zos8fpr7t7VPidHANY8z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知節（32171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32171&o=json
            external_identifier: CBDB:32171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.714Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhBP3ida7HQenv7WASh7R4
        subject_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知节
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3TLXpE67CXfHAjHUf8oLPs
          claim_id: c_zhBP3ida7HQenv7WASh7R4
          source_id: s_v7Zos8fpr7t7VPidHANY8z
          stance: supports
          locator: Q45421025
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_wLEyVWJ6oJPFKAjzJxcaB2
          claim_id: c_zhBP3ida7HQenv7WASh7R4
          source_id: s_SGeUn7oQG4uicqAJGWJA5A
          stance: supports
          locator: Q45421025
          quotation: null
          interpretation_note: null
          source:
            id: s_SGeUn7oQG4uicqAJGWJA5A
            source_type: api_record
            title: 维基数据：王知节（Q45421025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421025
            external_identifier: Q45421025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Srh91MVC6SP3Ev5niFai5G
        subject_person_id: p_N2rq6fTeXyPByDHvE3nio9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jeZ98ny87dEtPZWL3YTHe4
          claim_id: c_Srh91MVC6SP3Ev5niFai5G
          source_id: s_SGeUn7oQG4uicqAJGWJA5A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SGeUn7oQG4uicqAJGWJA5A
            source_type: api_record
            title: 维基数据：王知节（Q45421025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421025
            external_identifier: Q45421025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_rKgvy579BCPWu954Gn2bkt
          claim_id: c_Srh91MVC6SP3Ev5niFai5G
          source_id: s_v7Zos8fpr7t7VPidHANY8z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_v7Zos8fpr7t7VPidHANY8z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知節（32171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32171&o=json
            external_identifier: CBDB:32171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.714Z
            metadata_json: null
        - id: cs_48GgZLBFFgiCg1a8KgV2t3
          claim_id: c_Srh91MVC6SP3Ev5niFai5G
          source_id: s_puS1a27Wu8SYKYa1cAyL6L
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_puS1a27Wu8SYKYa1cAyL6L
            source_type: api_record
            title: 维基数据：王儒贤（Q45421023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421023
            external_identifier: Q45421023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_iaD2b6jpF1LZj8MAjAizSF
          claim_id: c_Srh91MVC6SP3Ev5niFai5G
          source_id: s_Ji2LQyRM1C9QyXiqJ69STK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Ji2LQyRM1C9QyXiqJ69STK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儒賢（32170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32170&o=json
            external_identifier: CBDB:32170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:25.300Z
            metadata_json: null
      object_person:
        id: p_N2rq6fTeXyPByDHvE3nio9
        status: active
        display_name: 王儒贤
        merged_into_person_id: null
  children:
    - claim:
        id: c_1LGurg2NtkpYciUKkiymZJ
        subject_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P6tjx484JSND9cBLxhLfkk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_44xsWB2DUm6kbGntrLaFZ9
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_dHUf44WWxwuAr9NUFLwqKP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dHUf44WWxwuAr9NUFLwqKP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冑（32172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json
            external_identifier: CBDB:32172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:25.349Z
            metadata_json: null
        - id: cs_gPfLaByGua1DCK6SpSbpHM
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_BAwJwAgNmuXwsxs8JuEuLB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BAwJwAgNmuXwsxs8JuEuLB
            source_type: api_record
            title: 维基数据：王胄（Q45421029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421029
            external_identifier: Q45421029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:25.218Z
            metadata_json: null
        - id: cs_JWz3pm933b2jBFWAUbZY9y
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_SGeUn7oQG4uicqAJGWJA5A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SGeUn7oQG4uicqAJGWJA5A
            source_type: api_record
            title: 维基数据：王知节（Q45421025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421025
            external_identifier: Q45421025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_XWoujFtyH5PDfyK3VEGzF6
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_v7Zos8fpr7t7VPidHANY8z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_v7Zos8fpr7t7VPidHANY8z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知節（32171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32171&o=json
            external_identifier: CBDB:32171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.714Z
            metadata_json: null
      object_person:
        id: p_P6tjx484JSND9cBLxhLfkk
        status: active
        display_name: 王胄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iUJGhMv7XYqAyx1XGAPG52
        subject_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Fb1Y7PaCUiyrjL5WpXJdPH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VCY1dAmE75CiMFL6ENagCD
          claim_id: c_iUJGhMv7XYqAyx1XGAPG52
          source_id: s_18FPKAUu6NBN99q2AtF9F9
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王知節、父親王處廉的任官都止於州司馬
          interpretation_note: null
          source:
            id: s_18FPKAUu6NBN99q2AtF9F9
            source_type: website
            title: 中文维基百科：王维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:06.879Z
            metadata_json: null
      object_person:
        id: p_Fb1Y7PaCUiyrjL5WpXJdPH
        status: active
        display_name: 王维
        merged_into_person_id: null
    - claim:
        id: c_dXN6gkrR1TAsrwDDmf25jf
        subject_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_g6dF114X12m5d8tCHGiM7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aQ2SNXxSw858oVa3DEaeJJ
          claim_id: c_dXN6gkrR1TAsrwDDmf25jf
          source_id: s_LiKViEEeW5ghM63fBmpxqv
          stance: supports
          locator: 条文：条文识读（ancestor）（4世）
          quotation: 他的四世祖王儒贤、曾祖王知节、父亲王处廉都官至司马
          interpretation_note: null
          source:
            id: s_LiKViEEeW5ghM63fBmpxqv
            source_type: website
            title: 中文维基百科：王缙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:21.741Z
            metadata_json: null
      object_person:
        id: p_g6dF114X12m5d8tCHGiM7v
        status: active
        display_name: 王缙
        merged_into_person_id: null
  other: []
---

# 王知节

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王知节，唐人物。籍贯祁縣，曾任州司馬。（中国历代人物传记资料库 CBDB 32171） | accepted |
| name.primary | 王知节 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N2rq6fTeXyPByDHvE3nio9 | 王儒贤 | accepted |
| children | p_P6tjx484JSND9cBLxhLfkk | 王胄 | accepted |
| descendants | p_Fb1Y7PaCUiyrjL5WpXJdPH | 王维 | accepted |
| descendants | p_g6dF114X12m5d8tCHGiM7v | 王缙 | accepted |

## 外部来源

- [维基数据：王儒贤（Q45421023）](https://www.wikidata.org/wiki/Q45421023)
- [维基数据：王知节（Q45421025）](https://www.wikidata.org/wiki/Q45421025)
- [维基数据：王胄（Q45421029）](https://www.wikidata.org/wiki/Q45421029)
- [中文维基百科：王缙](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99)
- [中文维基百科：王维](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%B4)
- [CBDB 中国历代人物传记资料库：王儒賢（32170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32170&o=json)
- [CBDB 中国历代人物传记资料库：王知節（32171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32171&o=json)
- [CBDB 中国历代人物传记资料库：王冑（32172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json)
