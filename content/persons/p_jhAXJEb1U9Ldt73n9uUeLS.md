---
schema: wang-person/v1
id: p_jhAXJEb1U9Ldt73n9uUeLS
status: active
merged_into: null
display_name: 王审琦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7WlSqD87DTMAerRsud5anr
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王审琦（925年—974年），史料所见人物。本项目依据《王审琦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TEap_D8cjGTgGYlre9UaMv
          claim_id: c_7WlSqD87DTMAerRsud5anr
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: Q15940340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c4xpZv8asdei46QMaSfiqW
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 925年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0925-01-01
            latest: 0925-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xZxs9P7frkWfns8sQk6de5
          claim_id: c_c4xpZv8asdei46QMaSfiqW
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JY9BkLsQu2Li43MGFju9Nd
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 974年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0974-01-01
            latest: 0974-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_18RmGE8hqMxRAD8r6ZcRgE
          claim_id: c_JY9BkLsQu2Li43MGFju9Nd
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gqeKjVypT9abQjDCzktwt2
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王审琦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XY6gKejrvT4ngee8mi1Dk9
          claim_id: c_gqeKjVypT9abQjDCzktwt2
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: Q15940340
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6p3YKbidW7Cr8dVM1fY8bM
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_346YH4uEe2V6q2KYa4fBLJ
          claim_id: c_6p3YKbidW7Cr8dVM1fY8bM
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
        - id: cs_823VwtATKK5Sv5t6xyvKcf
          claim_id: c_6p3YKbidW7Cr8dVM1fY8bM
          source_id: s_5h3ogmep1VLLiYxHP9RUqR
          stance: supports
          locator: P22（父）
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
        - id: cs_Fway57x9VxsEDp5Sk7aTuR
          claim_id: c_6p3YKbidW7Cr8dVM1fY8bM
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
        id: p_6MGDJDsMfhoCMpi8TCXnFR
        status: active
        display_name: 王承衍
        merged_into_person_id: null
    - claim:
        id: c_x2JgM2h4h596xbx9CtcTG9
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_RnfaEiMtBcxyDgxD5TMJDb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4NBY6Zukk8EPLRbzSePVNk
          claim_id: c_x2JgM2h4h596xbx9CtcTG9
          source_id: s_G86ise9dzDJQuceDKkF8He
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G86ise9dzDJQuceDKkF8He
            source_type: api_record
            title: 维基数据：王承衎（Q45387097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387097
            external_identifier: Q45387097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.659Z
            metadata_json: null
        - id: cs_ddnDZfZbTUrFS41755qR9Q
          claim_id: c_x2JgM2h4h596xbx9CtcTG9
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
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
        - id: cs_kk6uRDQqKMrF168exKR1RN
          claim_id: c_x2JgM2h4h596xbx9CtcTG9
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
        id: p_RnfaEiMtBcxyDgxD5TMJDb
        status: active
        display_name: 王承衎
        merged_into_person_id: null
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
        id: p_nauC3gPyC9F4eNZQfgox1p
        status: active
        display_name: 王承德
        merged_into_person_id: null
    - claim:
        id: c_Fi5VQcdjkvHeYpS71TRc1j
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G64voxWRiqYeu8c8dXQSwu
          claim_id: c_Fi5VQcdjkvHeYpS71TRc1j
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
        - id: cs_eXNTPQ3DhFLwr5r65iaH5X
          claim_id: c_Fi5VQcdjkvHeYpS71TRc1j
          source_id: s_b6Pc1i8AQzFkjZM7aVVC7A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_b6Pc1i8AQzFkjZM7aVVC7A
            source_type: api_record
            title: 维基数据：王承祐（Q45387105）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387105
            external_identifier: Q45387105
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_uVNz6j93QFg4et3wuMqLoc
          claim_id: c_Fi5VQcdjkvHeYpS71TRc1j
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
        id: p_85EbDNcrsn9ZB6rqXHzzZx
        status: active
        display_name: 王承祐
        merged_into_person_id: null
    - claim:
        id: c_z9EzDW1UzKwHrxSJgPV4i3
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_wCQ4n6gjkTCPS8LugdRHWA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Y3uQrd9k85Cr1i1JNv6NU
          claim_id: c_z9EzDW1UzKwHrxSJgPV4i3
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
        - id: cs_75Zg4zQiavG9GMpz3VjXpM
          claim_id: c_z9EzDW1UzKwHrxSJgPV4i3
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
        - id: cs_wPMwVQMe82UCeEGE8E7iBu
          claim_id: c_z9EzDW1UzKwHrxSJgPV4i3
          source_id: s_8tb7H17LZZ18Y1Xh2UHhzJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8tb7H17LZZ18Y1Xh2UHhzJ
            source_type: api_record
            title: 维基数据：王承休（Q45387109）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387109
            external_identifier: Q45387109
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
      object_person:
        id: p_wCQ4n6gjkTCPS8LugdRHWA
        status: active
        display_name: 王承休
        merged_into_person_id: null
    - claim:
        id: c_gMRgLwaY95Q4dCKDhVTEX5
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vCSXWHEEa1hukQBzvMQ9VV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1pteTChXnuPByfs23G8hyP
          claim_id: c_gMRgLwaY95Q4dCKDhVTEX5
          source_id: s_99yEoSjQJZkxUHQLJeCPnA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_99yEoSjQJZkxUHQLJeCPnA
            source_type: api_record
            title: 维基数据：王承偓（Q45387113）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387113
            external_identifier: Q45387113
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_33EocYo4BV57EhM5gNwLSY
          claim_id: c_gMRgLwaY95Q4dCKDhVTEX5
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
        - id: cs_kJXSUA1C8KaYa28wgrhm8c
          claim_id: c_gMRgLwaY95Q4dCKDhVTEX5
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
        id: p_vCSXWHEEa1hukQBzvMQ9VV
        status: active
        display_name: 王承偓
        merged_into_person_id: null
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
        id: p_CxGK66CGQTocSW3DdK8C5x
        status: active
        display_name: 王承仅
        merged_into_person_id: null
    - claim:
        id: c_dH9A8X9KwBdd8K3US727QW
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9fWZxfRsRL9p9LDDGf3EUt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1sDVkBuz3PybUrwGFN19Fh
          claim_id: c_dH9A8X9KwBdd8K3US727QW
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
        - id: cs_9CgSKiAry6cFG2U4MGPP3C
          claim_id: c_dH9A8X9KwBdd8K3US727QW
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
        - id: cs_EfPtVaPbah7dZszShYUABp
          claim_id: c_dH9A8X9KwBdd8K3US727QW
          source_id: s_QQvDdUutvWNCxWrsz4Lymf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQvDdUutvWNCxWrsz4Lymf
            source_type: api_record
            title: 维基数据：王承俊（Q45387116）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387116
            external_identifier: Q45387116
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
      object_person:
        id: p_9fWZxfRsRL9p9LDDGf3EUt
        status: active
        display_name: 王承俊
        merged_into_person_id: null
    - claim:
        id: c_bwniFvu42yEC3uYF6ZeDN5
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_uPz7miu7kSh8ipxJGzwsPq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Z2vMQuxmjEgYuRDAXzucs
          claim_id: c_bwniFvu42yEC3uYF6ZeDN5
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
        - id: cs_V8rQ1NBdB69k9fX9c4fXQy
          claim_id: c_bwniFvu42yEC3uYF6ZeDN5
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
        - id: cs_xCt5FkS2gdRjevwVTC8Eoc
          claim_id: c_bwniFvu42yEC3uYF6ZeDN5
          source_id: s_4KJkEEeYfKjCKRRJ1eij2q
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4KJkEEeYfKjCKRRJ1eij2q
            source_type: api_record
            title: 维基数据：王承僎（Q45387121）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387121
            external_identifier: Q45387121
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
      object_person:
        id: p_uPz7miu7kSh8ipxJGzwsPq
        status: active
        display_name: 王承僎
        merged_into_person_id: null
    - claim:
        id: c_QRFBg3vztVrPRhT9bK4yiX
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JHCaZYHpZctMsbPADM7r6t
          claim_id: c_QRFBg3vztVrPRhT9bK4yiX
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：女兒
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
        - id: cs_fMBmH42MMMnVQ43gxUe7sX
          claim_id: c_QRFBg3vztVrPRhT9bK4yiX
          source_id: s_DkRGP27FpX8V7aNdqGSGon
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DkRGP27FpX8V7aNdqGSGon
            source_type: api_record
            title: 维基数据：王氏（Q45434499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45434499
            external_identifier: Q45434499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_nbrkYaYxNXW6pQ8bB2C7bJ
          claim_id: c_QRFBg3vztVrPRhT9bK4yiX
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
        id: p_xyPtAQ7AR8yTpy2qwHiGWa
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王审琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王审琦（925年—974年），史料所见人物。本项目依据《王审琦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 925年 | accepted |
| death.date | 974年 | accepted |
| name.primary | 王审琦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |
| children | p_RnfaEiMtBcxyDgxD5TMJDb | 王承衎 | accepted |
| children | p_nauC3gPyC9F4eNZQfgox1p | 王承德 | accepted |
| children | p_85EbDNcrsn9ZB6rqXHzzZx | 王承祐 | accepted |
| children | p_wCQ4n6gjkTCPS8LugdRHWA | 王承休 | accepted |
| children | p_vCSXWHEEa1hukQBzvMQ9VV | 王承偓 | accepted |
| children | p_CxGK66CGQTocSW3DdK8C5x | 王承仅 | accepted |
| children | p_9fWZxfRsRL9p9LDDGf3EUt | 王承俊 | accepted |
| children | p_uPz7miu7kSh8ipxJGzwsPq | 王承僎 | accepted |
| children | p_xyPtAQ7AR8yTpy2qwHiGWa | 王氏 | accepted |

## 外部来源

- [维基数据：王承德（Q45387102）](https://www.wikidata.org/wiki/Q45387102)
- [维基数据：王承仅（Q45387119）](https://www.wikidata.org/wiki/Q45387119)
- [维基数据：王承俊（Q45387116）](https://www.wikidata.org/wiki/Q45387116)
- [维基数据：王承衎（Q45387097）](https://www.wikidata.org/wiki/Q45387097)
- [维基数据：王承偓（Q45387113）](https://www.wikidata.org/wiki/Q45387113)
- [维基数据：王承休（Q45387109）](https://www.wikidata.org/wiki/Q45387109)
- [维基数据：王承衍（Q28415659）](https://www.wikidata.org/wiki/Q28415659)
- [维基数据：王承祐（Q45387105）](https://www.wikidata.org/wiki/Q45387105)
- [维基数据：王承僎（Q45387121）](https://www.wikidata.org/wiki/Q45387121)
- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [维基数据：王氏（Q45434499）](https://www.wikidata.org/wiki/Q45434499)
- [CBDB 中国历代人物传记资料库：王審琦（3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
