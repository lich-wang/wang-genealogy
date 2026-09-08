---
schema: wang-person/v1
id: p_nauC3gPyC9F4eNZQfgox1p
status: active
merged_into: null
display_name: 王承德
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chbCxX1XCVeJ1DA9zXLg57
        subject_person_id: p_nauC3gPyC9F4eNZQfgox1p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承德，宋人物。CBDB 记录其籍贯记录为海北州，曾任刺史、西上閤門使。中国历代人物传记资料库（CBDB）以人物编号 17748 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fU3M9diQYf89PdxyAs56UK
          claim_id: c_chbCxX1XCVeJ1DA9zXLg57
          source_id: s_9Bxbgx7PdZjzQztiuqDhcK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9Bxbgx7PdZjzQztiuqDhcK
            source_type: api_record
            title: 维基数据：王承德（Q45387102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387102
            external_identifier: Q45387102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_BhX7aqhYN3a1VfT5PMHe6Y
          claim_id: c_chbCxX1XCVeJ1DA9zXLg57
          source_id: s_roLdRLMHv9nqgj31e4UvLq
          stance: supports
          locator: CBDB:17748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_roLdRLMHv9nqgj31e4UvLq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承德（17748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17748&o=json
            external_identifier: CBDB:17748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:01.792Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJtcjucnjQa3yrCLwcjQBz
        subject_person_id: p_nauC3gPyC9F4eNZQfgox1p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承德
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C6rRWMrtvfY2GSKXuNY524
          claim_id: c_zJtcjucnjQa3yrCLwcjQBz
          source_id: s_roLdRLMHv9nqgj31e4UvLq
          stance: supports
          locator: Q45387102
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_T8QbZ3KpHmDtjPsx6PdgQ9
          claim_id: c_zJtcjucnjQa3yrCLwcjQBz
          source_id: s_9Bxbgx7PdZjzQztiuqDhcK
          stance: supports
          locator: Q45387102
          quotation: null
          interpretation_note: null
          source:
            id: s_9Bxbgx7PdZjzQztiuqDhcK
            source_type: api_record
            title: 维基数据：王承德（Q45387102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387102
            external_identifier: Q45387102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fd4FeE7Dc9NCKqQoxbGutS
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nauC3gPyC9F4eNZQfgox1p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5XxkEP2fUiZWLnTjyGH16n
          claim_id: c_fd4FeE7Dc9NCKqQoxbGutS
          source_id: s_9Bxbgx7PdZjzQztiuqDhcK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9Bxbgx7PdZjzQztiuqDhcK
            source_type: api_record
            title: 维基数据：王承德（Q45387102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387102
            external_identifier: Q45387102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_Vgm9HdBRN6W7mU426NwQWX
          claim_id: c_fd4FeE7Dc9NCKqQoxbGutS
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
        - id: cs_YGwa3sAKMw6GDnTBhcFAyM
          claim_id: c_fd4FeE7Dc9NCKqQoxbGutS
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
  children:
    - claim:
        id: c_bHyRmhzbnGs5ZqxggWzqQs
        subject_person_id: p_nauC3gPyC9F4eNZQfgox1p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZPiJcbwj4KJjw7t1YK6E4f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_puzzWHnrt4KrQJn9NhGs9M
          claim_id: c_bHyRmhzbnGs5ZqxggWzqQs
          source_id: s_9Bxbgx7PdZjzQztiuqDhcK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9Bxbgx7PdZjzQztiuqDhcK
            source_type: api_record
            title: 维基数据：王承德（Q45387102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387102
            external_identifier: Q45387102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_zxGDh93TwBrK79uKPKrFu2
          claim_id: c_bHyRmhzbnGs5ZqxggWzqQs
          source_id: s_N2nE1uhLZsS7bBLZk7mBBv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N2nE1uhLZsS7bBLZk7mBBv
            source_type: api_record
            title: 维基数据：王世厚（Q45387147）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387147
            external_identifier: Q45387147
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_T49F6gbQKo4BHy2AWWeNKR
          claim_id: c_bHyRmhzbnGs5ZqxggWzqQs
          source_id: s_roLdRLMHv9nqgj31e4UvLq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_ZPiJcbwj4KJjw7t1YK6E4f
        status: active
        display_name: 王世厚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承德，宋人物。CBDB 记录其籍贯记录为海北州，曾任刺史、西上閤門使。中国历代人物传记资料库（CBDB）以人物编号 17748 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王承德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhAXJEb1U9Ldt73n9uUeLS | 王审琦 | accepted |
| children | p_ZPiJcbwj4KJjw7t1YK6E4f | 王世厚 | accepted |

## 外部来源

- [维基数据：王承德（Q45387102）](https://www.wikidata.org/wiki/Q45387102)
- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [维基数据：王世厚（Q45387147）](https://www.wikidata.org/wiki/Q45387147)
- [CBDB 中国历代人物传记资料库：王承德（17748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17748&o=json)
- [CBDB 中国历代人物传记资料库：王審琦（3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
