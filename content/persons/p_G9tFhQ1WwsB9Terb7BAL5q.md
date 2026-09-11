---
schema: wang-person/v1
id: p_G9tFhQ1WwsB9Terb7BAL5q
status: active
merged_into: null
display_name: 王濬
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g2BYrv9M6Hakv8LdLEZ4Rz
        subject_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Esdh4Csg653XH6Xe4aYykF
          claim_id: c_g2BYrv9M6Hakv8LdLEZ4Rz
          source_id: s_QhD1r7dus14xTjAJ4s83SM
          stance: supports
          locator: CBDB:198786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198786）
          source: &a1
            id: s_QhD1r7dus14xTjAJ4s83SM
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 198786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198786&o=json
            external_identifier: CBDB:198786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WBvJLrkRtEq3V564WBdGHX
        subject_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzZ9hGoY3MVuDEgWK8pU3u
          claim_id: c_WBvJLrkRtEq3V564WBdGHX
          source_id: s_QhD1r7dus14xTjAJ4s83SM
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
        id: c_6SzPDTqqZAxB5SsGF5z9yR
        subject_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬（生于1432年），明人物。明清進士進士，籍贯商水，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 198786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gXzgAK-K7eBVBMcDKN-X-k
          claim_id: c_6SzPDTqqZAxB5SsGF5z9yR
          source_id: s_QhD1r7dus14xTjAJ4s83SM
          stance: supports
          locator: CBDB:198786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WQkiNSo_rp7XsrljCXfyPe
        subject_person_id: p_9wRMch85tEnfzHmGDnqVUg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TmwTKJB-eRcaSqmVYigOFb
          claim_id: c_WQkiNSo_rp7XsrljCXfyPe
          source_id: s_j6719iK2pgj31WWuhY39Mf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j6719iK2pgj31WWuhY39Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 316729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316729&o=json
            external_identifier: CBDB:316729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9wRMch85tEnfzHmGDnqVUg
        status: active
        display_name: 王亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tHnmCKgJvKQRwRzr87Ih_V
        subject_person_id: p_6JRzPaC52GSsNCAyicPbAu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_edeRBTBgv7Kr1tTnQ_38yI
          claim_id: c_tHnmCKgJvKQRwRzr87Ih_V
          source_id: s_sYnE2bBNKa8VbRFGGNZGqE
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sYnE2bBNKa8VbRFGGNZGqE
            source_type: api_record
            title: 中国历代人物传记资料库：王彥和（CBDB 316707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316707&o=json
            external_identifier: CBDB:316707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6JRzPaC52GSsNCAyicPbAu
        status: active
        display_name: 王彥和
        merged_into_person_id: null
    - claim:
        id: c_5gvg2o4mKw4a058rAmQg2t
        subject_person_id: p_pMB8fGuLuD5hhsA391BD78
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_KsGu60szu4lOmIYviupy
          claim_id: c_5gvg2o4mKw4a058rAmQg2t
          source_id: s_jE9YBjRJPke4T46PQApDBR
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jE9YBjRJPke4T46PQApDBR
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 316718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316718&o=json
            external_identifier: CBDB:316718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pMB8fGuLuD5hhsA391BD78
        status: active
        display_name: 王鳳儀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| birth.date | 1432年 | accepted |
| bio.summary | 王濬（生于1432年），明人物。明清進士進士，籍贯商水，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 198786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wRMch85tEnfzHmGDnqVUg | 王亨 | accepted |
| ancestors | p_6JRzPaC52GSsNCAyicPbAu | 王彥和 | accepted |
| ancestors | p_pMB8fGuLuD5hhsA391BD78 | 王鳳儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳儀（CBDB 316718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316718&o=json)
- [中国历代人物传记资料库：王亨（CBDB 316729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316729&o=json)
- [中国历代人物传记资料库：王濬（CBDB 198786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198786&o=json)
- [中国历代人物传记资料库：王彥和（CBDB 316707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316707&o=json)
